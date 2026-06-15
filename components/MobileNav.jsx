"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[25px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary border-white/10 w-full sm:max-w-sm">
                <VisuallyHidden>
                    <SheetTitle>Menu de navigation</SheetTitle>
                </VisuallyHidden>

                <div className="mt-16 mb-8 text-center">
                    <SheetClose asChild>
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Olivier <span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </SheetClose>
                </div>

                <nav className="flex flex-col gap-3 flex-1">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.path}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                            <SheetClose asChild>
                                <Link
                                    href={link.path}
                                    className={cn(
                                        "block w-full px-5 py-3 rounded-xl text-lg font-medium transition-all duration-300 border-l-4",
                                        link.path === pathname
                                            ? "bg-accent text-primary border-accent"
                                            : "text-white border-transparent hover:bg-[#232329] hover:border-accent/50"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        </motion.div>
                    ))}
                </nav>

                <div className="flex flex-col gap-6 mt-auto pt-8 border-t border-white/10">
                    <SheetClose asChild>
                        <Link href="/contact">
                            <Button className="w-full uppercase">
                                Embauchez-moi
                            </Button>
                        </Link>
                    </SheetClose>

                    <a
                        href="mailto:oliviermutombo449@gmail.com"
                        className="text-center text-sm text-white/60 hover:text-accent transition-colors"
                    >
                        oliviermutombo449@gmail.com
                    </a>

                    <Social
                        containerStyles="flex justify-center gap-5"
                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
