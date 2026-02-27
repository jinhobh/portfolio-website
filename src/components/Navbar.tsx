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
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-lavender-400/5 bg-twilight-950/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="text-gradient-gold font-mono text-sm font-bold tracking-widest transition-opacity hover:opacity-80"
                >
                    ✦ JH
                </Link>

                <ul className="flex items-center gap-8">
                    {links.map(({ href, label }) => {
                        const isActive =
                            href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative text-sm transition-all duration-300 ${isActive
                                            ? "text-gold-400"
                                            : "text-lavender-300/50 hover:text-lavender-300"
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-gold-400 to-sunset-400" />
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
