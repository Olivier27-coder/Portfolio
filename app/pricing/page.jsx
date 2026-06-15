"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import ContactForm from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter",
        price: "500 $",
        period: "à partir de",
        description: "Idéal pour une présence en ligne professionnelle.",
        features: [
            "Site vitrine responsive",
            "Jusqu'à 5 pages",
            "Formulaire de contact",
            "Optimisation mobile",
            "Livraison en 2–3 semaines",
        ],
        highlighted: false,
        cta: "Demander un devis",
    },
    {
        name: "Pro",
        price: "1 500 $",
        period: "à partir de",
        description: "Pour une application web ou mobile complète.",
        features: [
            "Application web ou mobile",
            "Authentification utilisateurs",
            "Base de données & API",
            "Tableau de bord admin",
            "Support 30 jours inclus",
            "Livraison en 4–8 semaines",
        ],
        highlighted: true,
        cta: "Demander un devis",
    },
    {
        name: "Sur mesure",
        price: "Devis personnalisé",
        period: "",
        description: "Solutions complexes : POS, e-learning, multi-plateforme.",
        features: [
            "Architecture sur mesure",
            "Web + mobile (Flutter)",
            "Synchronisation temps réel",
            "Intégrations tierces",
            "Formation & documentation",
            "Maintenance évolutive",
        ],
        highlighted: false,
        cta: "Discutons de votre projet",
    },
];

const Pricing = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const openQuoteSheet = (plan) => {
        setSelectedPlan(plan);
        setSheetOpen(true);
    };

    return (
        <>
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
                        className="text-center"
                    >
                        <h2 className="h2 text-white mb-4">Tarifs & Forfaits</h2>
                        <p className="text-white/60 max-w-[600px] mx-auto">
                            Des formules transparentes adaptées à votre budget. Chaque
                            projet est unique — ces tarifs servent de base pour un
                            devis personnalisé.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.5 + index * 0.1,
                                        duration: 0.5,
                                    },
                                }}
                                className={cn(
                                    "flex flex-col p-8 rounded-2xl border transition-all duration-300",
                                    plan.highlighted
                                        ? "bg-accent/10 border-accent scale-[1.02] xl:scale-105"
                                        : "bg-[#232329] border-white/10 hover:border-white/20"
                                )}
                            >
                                {plan.highlighted && (
                                    <span className="text-xs font-semibold uppercase text-accent mb-4">
                                        Le plus populaire
                                    </span>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-white/60 text-sm mb-6">
                                    {plan.description}
                                </p>

                                <div className="mb-6">
                                    <span className="text-4xl xl:text-5xl font-extrabold text-accent">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-white/40 text-sm ml-2">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                <ul className="flex flex-col gap-3 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm text-white/80"
                                        >
                                            <FiCheck className="text-accent shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.highlighted ? "default" : "outline"}
                                    size="lg"
                                    className="w-full uppercase"
                                    onClick={() => openQuoteSheet(plan)}
                                >
                                    {plan.cta}
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.8 } }}
                        className="text-center text-white/40 text-sm max-w-[700px] mx-auto"
                    >
                        * Les prix sont indicatifs en USD. Un audit gratuit permet
                        d&apos;établir un devis précis selon la complexité, les
                        délais et les fonctionnalités requises. Paiement échelonné
                        possible.
                    </motion.p>
                </div>
            </motion.section>

            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetContent
                    side="bottom"
                    className="bg-[#1c1c22] border-white/10 rounded-t-2xl max-h-[92vh] overflow-y-auto px-6 pb-10 pt-8"
                >
                    <SheetHeader className="text-left mb-6 pr-10">
                        <SheetTitle className="text-2xl text-white">
                            Demande de devis
                            {selectedPlan && (
                                <span className="text-accent">
                                    {" "}
                                    — {selectedPlan.name}
                                </span>
                            )}
                        </SheetTitle>
                        <SheetDescription className="text-white/60">
                            {selectedPlan
                                ? `Forfait ${selectedPlan.name} (${selectedPlan.price}). Remplissez le formulaire ci-dessous.`
                                : "Remplissez le formulaire pour recevoir un devis personnalisé."}
                        </SheetDescription>
                    </SheetHeader>

                    {selectedPlan && (
                        <ContactForm
                            key={selectedPlan.name}
                            idPrefix="pricing"
                            planName={selectedPlan.name}
                            planPrice={selectedPlan.price}
                        />
                    )}
                </SheetContent>
            </Sheet>
        </>
    );
};

export default Pricing;
