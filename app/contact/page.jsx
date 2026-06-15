"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import Social from "@/components/Social";

const contactInfo = [
    {
        icon: <FiMail />,
        title: "Email",
        value: "oliviermutombo449@gmail.com",
        href: "mailto:oliviermutombo449@gmail.com",
    },
    {
        icon: <FiMapPin />,
        title: "Localisation",
        value: "Kinshasa, République Démocratique du Congo",
    },
    {
        icon: <FiPhone />,
        title: "Téléphone",
        value: "(+243) 817 000 870",
        href: "tel:+243817000870",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-12 xl:gap-[60px]">
                    <div className="flex-1 text-center xl:text-left">
                        <h3 className="text-4xl xl:text-5xl font-bold text-white mb-6">
                            Travaillons{" "}
                            <span className="text-accent">ensemble</span>
                        </h3>
                        <p className="text-white/60 max-w-[460px] mx-auto xl:mx-0 mb-12">
                            Vous avez un projet en tête ? Contactez-moi et discutons de
                            la meilleure façon de le concrétiser.
                        </p>

                        <ul className="flex flex-col gap-8 xl:gap-10 mb-12">
                            {contactInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-center xl:justify-start gap-6"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-[#232329] flex items-center justify-center text-accent text-2xl shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white/60 text-sm mb-1">
                                            {item.title}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-accent transition-colors text-sm xl:text-base"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white text-sm xl:text-base">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <Social
                            containerStyles="flex justify-center xl:justify-start gap-6"
                            iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                        />
                    </div>

                    <ContactForm
                        idPrefix="contact"
                        className="flex-1 bg-[#232329] p-6 sm:p-8 xl:p-10 rounded-2xl"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
