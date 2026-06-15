"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { SiFlutter, SiNextdotjs, SiTypescript } from "react-icons/si";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const techBadges = [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
];

const CV_PATH = "/cv-olivier-mutombo.pdf";

const Home = () => {
    return (
        <section className="min-h-[80vh]">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center xl:justify-start xl:gap-16 xl:pt-8 xl:pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
                        }}
                        className="text-center xl:text-left order-2 xl:order-none"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 mb-4">
                            <span className="text-sm sm:text-base text-white/80 uppercase tracking-wide">
                                Développeur Full Stack
                            </span>
                            <span className="hidden sm:block text-white/30">|</span>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs sm:text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                Disponible en freelance
                            </span>
                        </div>

                        <h1 className="h1 mb-6">
                            Bonjour, je suis <br />
                            <span className="text-accent">Olivier Mutombo</span>
                        </h1>

                        <p className="max-w-[500px] mb-6 text-white/80 mx-auto xl:mx-0">
                            Je conçois des applications web et mobiles performantes pour
                            les entreprises, avec Flutter, Next.js et des workflows
                            assistés par l&apos;IA.
                        </p>

                        <ul className="flex flex-wrap justify-center xl:justify-start gap-3 mb-8">
                            {techBadges.map((tech) => (
                                <li
                                    key={tech.name}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#232329] border border-white/10 text-sm text-white/80"
                                >
                                    <span className="text-accent text-lg">{tech.icon}</span>
                                    {tech.name}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-6">
                            <a href={CV_PATH} download>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="uppercase flex items-center gap-2 rounded-full text-accent hover:text-primary hover:bg-accent transition-all duration-300"
                                >
                                    <span>Télécharger CV</span>
                                    <FiDownload className="text-xl" />
                                </Button>
                            </a>
                            <Link href="/work">
                                <Button
                                    size="lg"
                                    className="uppercase rounded-full"
                                >
                                    Voir mes projets
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 mb-4 xl:mb-0">
                            <Social
                                containerStyles="flex justify-center xl:justify-start gap-6"
                                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                            />
                        </div>
                    </motion.div>

                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default Home;
