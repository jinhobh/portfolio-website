"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold tracking-widest text-emerald-400 transition-opacity hover:opacity-80"
                >
                    JH
                </Link>

                <ul className="flex items-center gap-8">
                    {links.map(({ href, label }) => {
                        const isActive =
                            href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative text-sm transition-colors duration-200 ${isActive
                                            ? "text-emerald-400"
                                            : "text-neutral-400 hover:text-neutral-200"
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 h-px w-full bg-emerald-400" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
