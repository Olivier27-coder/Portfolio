"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    { num: 3, suffix: "+", text: "Années d'expérience" },
    { num: 3, suffix: "", text: "Projets livrés" },
    { num: 14, suffix: "+", text: "Technologies maîtrisées" },
    { num: 3, suffix: "", text: "Langues parlées" },
];

const Stats = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="pt-8 pb-12 xl:pt-12 xl:pb-16"
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start justify-center xl:justify-start p-5 xl:p-6 rounded-xl bg-[#232329] border border-white/5"
                        >
                            <CountUp
                                end={item.num}
                                duration={4}
                                delay={0.5}
                                suffix={item.suffix}
                                className="text-3xl xl:text-5xl font-extrabold text-accent"
                            />
                            <p className="text-center sm:text-left text-sm xl:text-base leading-snug text-white/80">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Stats;
