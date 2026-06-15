"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "243817000870";

export const contactServices = [
    "Développement Web",
    "Applications Mobile",
    "Solutions POS & Gestion",
    "Plateformes E-learning",
    "Autre",
];

const fieldClass =
    "border-white/10 bg-[#1c1c22] text-white placeholder:text-white/40 focus-visible:border-accent focus-visible:ring-accent/50";

const planToService = {
    Starter: "Développement Web",
    Pro: "Applications Mobile",
    "Sur mesure": "Autre",
};

const ContactForm = ({
    planName,
    planPrice,
    className = "",
    idPrefix = "contact",
}) => {
    const [form, setForm] = useState({
        firstname: "",
        email: "",
        phone: "",
        service: planName ? planToService[planName] || "" : "",
        message: planName
            ? `Je suis intéressé(e) par le forfait ${planName}${planPrice ? ` (${planPrice})` : ""}.\n\n`
            : "",
    });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (sent) setSent(false);
        if (error) setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.service) {
            setError("Veuillez sélectionner un service.");
            return;
        }

        const subject = planName
            ? `Devis forfait ${planName}`
            : `Demande — ${form.service}`;

        const parts = [
            `Bonjour, je vous contacte via votre portfolio.`,
            ``,
            `*${subject}*`,
            ``,
            `👤 Nom : ${form.firstname}`,
            `📧 Email : ${form.email}`,
            `📱 Téléphone : ${form.phone}`,
            `🛠 Service : ${form.service}`,
        ];

        if (planName) {
            parts.push(
                `💼 Forfait : ${planName}${planPrice ? ` (${planPrice})` : ""}`
            );
        }

        parts.push(``, `💬 Message :`, form.message);

        const text = parts.join("\n");

        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        );
        setSent(true);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-5 ${className}`}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor={`${idPrefix}-firstname`}
                        className="text-sm text-white/60"
                    >
                        Prénom
                    </label>
                    <Input
                        id={`${idPrefix}-firstname`}
                        type="text"
                        placeholder="Votre prénom"
                        required
                        value={form.firstname}
                        onChange={(e) => handleChange("firstname", e.target.value)}
                        className={fieldClass}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor={`${idPrefix}-email`}
                        className="text-sm text-white/60"
                    >
                        Email
                    </label>
                    <Input
                        id={`${idPrefix}-email`}
                        type="email"
                        placeholder="vous@email.com"
                        required
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={fieldClass}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor={`${idPrefix}-phone`}
                    className="text-sm text-white/60"
                >
                    Numéro WhatsApp
                </label>
                <Input
                    id={`${idPrefix}-phone`}
                    type="tel"
                    placeholder="+243 8XX XXX XXX"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={fieldClass}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor={`${idPrefix}-service`}
                    className="text-sm text-white/60"
                >
                    Service
                </label>
                <Select
                    value={form.service}
                    onValueChange={(value) => handleChange("service", value)}
                >
                    <SelectTrigger
                        id={`${idPrefix}-service`}
                        className={`w-full h-12 ${fieldClass}`}
                    >
                        <SelectValue placeholder="Choisir un service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232329] border-white/10 text-white z-[60]">
                        {contactServices.map((service) => (
                            <SelectItem
                                key={service}
                                value={service}
                                className="focus:bg-accent focus:text-primary"
                            >
                                {service}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor={`${idPrefix}-message`}
                    className="text-sm text-white/60"
                >
                    Message
                </label>
                <Textarea
                    id={`${idPrefix}-message`}
                    placeholder="Décrivez votre projet..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`min-h-[120px] resize-none ${fieldClass}`}
                />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <Button
                type="submit"
                size="lg"
                className="w-full uppercase flex items-center justify-center gap-2"
            >
                <FaWhatsapp className="text-xl" />
                Envoyer via WhatsApp
            </Button>

            {sent && (
                <p className="text-accent text-sm text-center">
                    WhatsApp va s&apos;ouvrir — envoyez le message pour finaliser
                    votre demande.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
