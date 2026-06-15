"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import { FaGlobe, FaMobileAlt, FaCashRegister, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        num: "01",
        title: "Développement Web",
        description:
            "Sites et applications web sur mesure avec Next.js, React et TypeScript — dashboards, plateformes et outils métier.",
        href: "/work",
        icon: <FaGlobe className="text-2xl" />,
        stack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
    },
    {
        num: "02",
        title: "Applications Mobile",
        description:
            "Applications iOS et Android performantes avec Flutter — interfaces fluides, synchronisation temps réel et expérience offline.",
        href: "/work",
        icon: <FaMobileAlt className="text-2xl" />,
        stack: ["Flutter", "Dart", "Firebase", "Supabase"],
    },
    {
        num: "03",
        title: "Solutions POS & Gestion",
        description:
            "Systèmes de caisse et gestion de boutiques : ventes, stocks, rapports et multi-points de vente synchronisés.",
        href: "/work",
        icon: <FaCashRegister className="text-2xl" />,
        stack: ["Next.js", "Flutter", "PostgreSQL", "API REST"],
    },
    {
        num: "04",
        title: "Plateformes E-learning",
        description:
            "Plateformes de formation en ligne avec gestion des cours, quiz, progression des apprenants et certificats.",
        href: "/contact",
        icon: <FaGraduationCap className="text-2xl" />,
        stack: ["React", "Next.js", "Flutter", "Supabase"],
    },
];

const processSteps = [
    "Audit gratuit",
    "Devis personnalisé",
    "Développement",
    "Livraison & support",
];

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto flex flex-col gap-12 xl:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.4, duration: 0.5 },
                    }}
                    className="text-center xl:text-left"
                >
                    <h2 className="h2 text-white mb-4">Mes services</h2>
                    <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                        Ce que je propose pour transformer vos idées en solutions
                        numériques performantes et adaptées à vos besoins.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[60px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.5 + index * 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            <Link
                                href={service.href}
                                className="group flex flex-col items-start justify-start gap-5"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl xl:text-5xl font-extrabold text-outline text-transparent transition-all duration-500 group-hover:text-accent">
                                            {service.num}
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-[#232329] flex items-center justify-center text-accent">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center group-hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-2xl xl:text-3xl" />
                                    </div>
                                </div>

                                <h3 className="text-3xl sm:text-4xl xl:text-[42px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-white/60 text-sm xl:text-base">
                                    {service.description}
                                </p>

                                <ul className="flex flex-wrap gap-2">
                                    {service.stack.map((tech) => (
                                        <li
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-[#232329] border border-white/10 text-white/70"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-b border-white/20 w-full" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <p className="text-white/60 text-sm text-center">
                        Mon processus de travail
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 xl:gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step} className="flex items-center gap-4">
                                <span className="text-accent font-semibold text-sm xl:text-base">
                                    {step}
                                </span>
                                {index < processSteps.length - 1 && (
                                    <span className="hidden sm:block text-white/30">
                                        →
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 xl:p-10 rounded-2xl bg-[#232329] border border-white/10"
                >
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl xl:text-2xl font-bold text-white mb-2">
                            Besoin d&apos;un devis ?
                        </h3>
                        <p className="text-white/60 text-sm xl:text-base max-w-md">
                            Décrivez votre projet et recevez une proposition
                            adaptée à vos objectifs.
                        </p>
                    </div>
                    <Link href="/contact">
                        <Button size="lg" className="uppercase">
                            Contactez-moi
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Services;
