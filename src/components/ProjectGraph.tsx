// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as d3 from "d3";
import { projects } from "@/data/projects";
import { skillsData } from "@/data/skillsData";

type Node = d3.SimulationNodeDatum & {
    id: string;
    group: "project" | "skill" | "system";
    label: string;
    category?: string;
};

type Link = d3.SimulationLinkDatum<Node> & {
    source: string;
    target: string;
    label: string;
};

export default function ProjectGraph() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const { nodes, links } = useMemo(() => {
        const projNodes: Node[] = projects.map((p) => ({
            id: p.slug,
            group: "project",
            label: p.title,
        }));

        const skillNodes: Node[] = skillsData.map((s) => ({
            id: s.name,
            group: s.category === "Infrastructure" ? "system" : "skill",
            label: s.name,
            category: s.category,
        }));

        const allLinks: Link[] = [];

        // Create relations from skills -> projects
        skillsData.forEach((skill) => {
            skill.relatedProjects.forEach((projName) => {
                // match project title vaguely
                const p = projects.find((p) => p.title.toLowerCase().includes(projName.toLowerCase()) || projName.toLowerCase().includes(p.title.toLowerCase()));
                if (p) {
                    allLinks.push({
                        source: p.slug,
                        target: skill.name,
                        label: "uses",
                    });
                }
            });
        });

        // We can also add manual links if we want to show depends on / inspired by:
        allLinks.push({ source: "diffusion-image-gen", target: "torch", label: "inspired by" }); // Example manual link, ignoring if target doesn't exist

        const validLinks = allLinks.filter(
            (l) => [...projNodes, ...skillNodes].find((n) => n.id === l.source) &&
                [...projNodes, ...skillNodes].find((n) => n.id === l.target)
        );

        return { nodes: [...projNodes, ...skillNodes], links: validLinks };
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = 600;

        const filteredNodes = nodes.filter(
            (n) => activeFilter === "All" || n.group === activeFilter || n.category === activeFilter
        );
        const nodeIds = new Set(filteredNodes.map(n => n.id));
        const filteredLinks = links.filter(
            (l) => nodeIds.has(l.source) && nodeIds.has(l.target)
        );

        // Clear previous SVG
        d3.select(containerRef.current).selectAll("*").remove();

        const svg = d3
            .select(containerRef.current)
            .append("svg")
            .attr("width", "100%")
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("class", "cursor-grab active:cursor-grabbing");

        // Add zoom capabilities
        const g = svg.append("g");
        const zoom = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.5, 3])
            .on("zoom", (event) => g.attr("transform", event.transform));
        svg.call(zoom);

        // Define force simulation
        const simulation = d3
            .forceSimulation<Node>(filteredNodes)
            .force(
                "link",
                d3.forceLink<Node, Link>(filteredLinks).id((d) => d.id).distance(120)
            )
            .force("charge", d3.forceManyBody().strength(-400))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().radius(40));

        // Draw Links
        const link = g
            .append("g")
            .selectAll("line")
            .data(filteredLinks)
            .join("line")
            .attr("stroke", "#a29bfe")
            .attr("stroke-opacity", 0.3)
            .attr("stroke-width", 1.5);

        // Draw Nodes
        const tooltip = d3.select(containerRef.current).append("div")
            .attr("class", "absolute hidden bg-background/90 text-lavender-300 text-xs px-3 py-2 rounded shadow-xl border border-white/10 pointer-events-none whitespace-nowrap z-50 transition-opacity duration-200");

        const node = g
            .append("g")
            .selectAll("g")
            .data(filteredNodes)
            .join("g")
            .call(
                d3.drag<SVGGElement, Node>()
                    .on("start", (event, d) => {
                        if (!event.active) simulation.alphaTarget(0.3).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                    })
                    .on("drag", (event, d) => {
                        d.fx = event.x;
                        d.fy = event.y;
                    })
                    .on("end", (event, d) => {
                        if (!event.active) simulation.alphaTarget(0);
                        d.fx = null;
                        d.fy = null;
                    })
            )
            .on("mouseover", (event, d) => {
                // Highlight connected nodes
                const connectedNodes = new Set<string>();
                filteredLinks.forEach(l => {
                    if ((l.source as Node).id === d.id) connectedNodes.add((l.target as Node).id);
                    if ((l.target as Node).id === d.id) connectedNodes.add((l.source as Node).id);
                });

                node.attr("opacity", n => n.id === d.id || connectedNodes.has(n.id) ? 1 : 0.2);
                link.attr("stroke-opacity", l => (l.source as Node).id === d.id || (l.target as Node).id === d.id ? 0.8 : 0.1);

                tooltip
                    .classed("hidden", false)
                    .html(`<strong>${d.label}</strong><br/><span class="text-white/50">${d.group}</span>`)
                    .style("left", `${event.pageX + 15}px`)
                    .style("top", `${event.pageY + 15}px`);
            })
            .on("mousemove", (event) => {
                tooltip.style("left", `${event.pageX + 15}px`).style("top", `${event.pageY + 15}px`);
            })
            .on("mouseout", () => {
                node.attr("opacity", 1);
                link.attr("stroke-opacity", 0.3);
                tooltip.classed("hidden", true);
            });

        // Draw nodes specific shapes based on group
        node.each(function (d) {
            const el = d3.select(this);
            if (d.group === "project") {
                el.append("rect")
                    .attr("width", 32)
                    .attr("height", 32)
                    .attr("x", -16)
                    .attr("y", -16)
                    .attr("rx", 8)
                    .attr("fill", "#1a1625")
                    .attr("stroke", "#f5c542")
                    .attr("stroke-width", 1.5);
            } else if (d.group === "skill") {
                el.append("circle")
                    .attr("r", 16)
                    .attr("fill", "#1a1625")
                    .attr("stroke", "#ff6b9d")
                    .attr("stroke-width", 1.5);
            } else {
                el.append("polygon")
                    .attr("points", "0,-18 16,-9 16,9 0,18 -16,9 -16,-9")
                    .attr("fill", "#1a1625")
                    .attr("stroke", "#a29bfe")
                    .attr("stroke-width", 1.5);
            }

            el.append("text")
                .text((d) => (d.label.length > 10 ? d.label.substring(0, 8) + ".." : d.label))
                .attr("y", 28)
                .attr("text-anchor", "middle")
                .attr("fill", "#e8e0f0")
                .attr("font-size", "10px")
                .style("pointer-events", "none");
        });

        simulation.on("tick", () => {
            link
                .attr("x1", (d) => (d.source as Node).x || 0)
                .attr("y1", (d) => (d.source as Node).y || 0)
                .attr("x2", (d) => (d.target as Node).x || 0)
                .attr("y2", (d) => (d.target as Node).y || 0);

            node.attr("transform", (d) => `translate(${d.x},${d.y})`);
        });

        return () => {
            simulation.stop();
            tooltip.remove();
        };
    }, [nodes, links, activeFilter]);

    const filters = ["All", "project", "Machine Learning", "Backend", "Frontend", "Infrastructure"];

    return (
        <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-xl mt-8 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors duration-300 ${activeFilter === f
                            ? "bg-lavender-400/20 border-lavender-400/50 text-lavender-300"
                            : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                            }`}
                    >
                        {f === "project" ? "Projects" : f}
                    </button>
                ))}
            </div>

            {/* Legend */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none text-[10px] text-white/50">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-transparent border border-gold-400"></div> Projects</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-transparent border border-sunset-500"></div> Skills</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 clip-hexagon bg-transparent border border-lavender-400" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div> Systems</div>
            </div>

            <div className="w-full h-[600px] relative rounded-xl border border-white/5 bg-background shadow-inner" ref={containerRef} />
        </div>
    );
}
