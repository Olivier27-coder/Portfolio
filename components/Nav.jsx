"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
                <Link
                    href={link.path}
                    key={link.path}
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } capitalize font-medium hover:text-accent transition-all duration-300`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
