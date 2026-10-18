"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowUpRight, BsGithub, BsPlayFill } from "react-icons/bs";
import {
    SiTailwindcss,
    SiReact,
    SiJavascript,
    SiSupabase,
    SiPostgresql,
    SiNextdotjs,
    SiFlutter,
    SiTypescript,
    SiDart,
} from "react-icons/si";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const FILTERS = ["Tous", "Web", "Mobile", "E-learning"];

const projectList = [
    {
        id: "01",
        category: "Web et Mobile",
        tags: ["Web", "Mobile"],
        title: "Smart-Caisses",
        role: "Full Stack Developer",
        year: "2024 — Present",
        status: "En production",
        description:
            "Conception et développement d'une solution POS et de gestion de boutiques.",
        results: [
            "Gestion centralisée des ventes et stocks",
            "Interface web + application mobile Flutter",
            "Synchronisation temps réel des caisses",
        ],
        images: [
            { src: "/assets/smart-caisse.png", alt: "Smart-Caisses — Dashboard" },
            { src: "/assets/smart-caisse-mobile.png", alt: "Smart-Caisses — Connexion" },
            { src: "/assets/smart-caisse-pos.png", alt: "Smart-Caisses — À propos" },
        ],
        url: "https://smart-caisses.com",
        github: "https://github.com/Olivier27-coder/Smart-Caissesn",
        videoUrl: null,
        stack: [
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Dart", icon: <SiDart /> },
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Neon", icon: <SiPostgresql /> },
        ],
        caseStudy: {
            features: [
                "Tableau de bord administrateur",
                "Gestion des produits et inventaire",
                "Application mobile pour les caissiers",
                "Rapports de ventes en temps réel",
            ],
            challenges: [
                "Synchronisation offline/online des données",
                "Performance avec plusieurs caisses actives",
                "Sécurité des transactions",
            ],
            learnings: [
                "Architecture full stack Next.js + Flutter",
                "Gestion d'état temps réel avec Supabase",
                "Déploiement multi-plateforme",
            ],
        },
    },
    {
        id: "02",
        category: "Web et Mobile",
        tags: ["Web", "Mobile"],
        title: "PayFast",
        role: "Front-End Developer",
        year: "2024 — Present",
        status: "En développement",
        description:
            "Application de paiement mobile avec interface front-end moderne et fluide.",
        results: [
            "UX optimisée pour les paiements rapides",
            "Design responsive mobile-first",
            "Intégration API de paiement sécurisée",
        ],
        images: [
            { src: "/assets/payfast.png", alt: "PayFast — Accueil" },
            { src: "/assets/payfast-dashboard.png", alt: "PayFast — Carte Visa" },
        ],
        url: "https://payfast.com",
        github: null,
        videoUrl: null,
        stack: [
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Dart", icon: <SiDart /> },
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Neon", icon: <SiPostgresql /> },
        ],
        caseStudy: {
            features: [
                "Flux de paiement simplifié",
                "Historique des transactions",
                "Notifications push",
                "Authentification sécurisée",
            ],
            challenges: [
                "Conformité aux standards de paiement",
                "Optimisation des performances mobile",
                "Gestion des erreurs réseau",
            ],
            learnings: [
                "Patterns UI pour applications fintech",
                "Intégration d'APIs tierces",
                "Tests utilisateurs sur mobile",
            ],
        },
    },
    {
        id: "03",
        category: "E-learning, Web et Mobile",
        tags: ["Web", "Mobile", "E-learning"],
        title: "CyberWeb-academy",
        role: "Full Stack Developer",
        year: "2024 — Present",
        status: "En production",
        description:
            "Plateforme e-learning permettant la gestion des formations en ligne.",
        results: [
            "Catalogue de cours structuré par modules",
            "Suivi de progression des apprenants",
            "Interface admin pour les formateurs",
        ],
        images: [
            { src: "/assets/cyberweb-academy.png", alt: "CyberWeb — Accueil" },
            { src: "/assets/cyberweb-courses.png", alt: "CyberWeb — Communauté" },
            { src: "/assets/cyberweb-mobile.png", alt: "CyberWeb — Mission" },
        ],
        url: "https://cyberwebacad.com",
        github: null,
        videoUrl: null,
        stack: [
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "React", icon: <SiReact /> },
            { name: "Javascript", icon: <SiJavascript /> },
            { name: "Dart", icon: <SiDart /> },
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "Supabase", icon: <SiSupabase /> },
            { name: "Neon", icon: <SiPostgresql /> },
        ],
        caseStudy: {
            features: [
                "Gestion des cours et leçons",
                "Quiz et évaluations",
                "Certificats de fin de formation",
                "Application mobile pour les étudiants",
            ],
            challenges: [
                "Streaming vidéo optimisé",
                "Gestion des rôles (admin, formateur, étudiant)",
                "Scalabilité du contenu",
            ],
            learnings: [
                "Architecture LMS complète",
                "Gestion de contenu multimédia",
                "Expérience utilisateur pédagogique",
            ],
        },
    },
];

const isValidLink = (url) => Boolean(url && url !== "#");

const ProjectImage = ({ src, alt, className, priority, sizes }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div
                className={cn(
                    "flex flex-col items-center justify-center gap-2 bg-[#232329] border border-white/10 rounded-xl text-center p-6",
                    className
                )}
            >
                <span className="text-accent text-sm font-medium">Aperçu à venir</span>
                <span className="text-white/40 text-xs">{alt}</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover rounded-xl"
            priority={priority}
            onError={() => setError(true)}
        />
    );
};

const ActionButton = ({ href, icon: Icon, label, disabled }) => {
    const buttonClass = cn(
        "w-[50px] h-[50px] rounded-full flex justify-center items-center transition-all duration-300",
        disabled
            ? "bg-white/5 opacity-40 cursor-not-allowed"
            : "bg-white/5 hover:bg-white/10 group"
    );

    const iconEl = (
        <Icon
            className={cn(
                "text-white text-2xl xl:text-3xl transition-all duration-300",
                !disabled && "group-hover:text-accent"
            )}
        />
    );

    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild={!disabled} disabled={disabled}>
                    {disabled ? (
                        <span className={buttonClass}>{iconEl}</span>
                    ) : (
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonClass}
                        >
                            {iconEl}
                        </Link>
                    )}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{disabled ? `${label} — indisponible` : label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const CaseStudySheet = ({ project }) => (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant="outline" className="uppercase text-sm">
                Case study
            </Button>
        </SheetTrigger>
        <SheetContent
            side="right"
            className="bg-[#1c1c22] border-white/10 text-white w-full sm:max-w-lg overflow-y-auto"
        >
            <SheetHeader className="text-left pt-8">
                <SheetTitle className="text-2xl text-white">{project.title}</SheetTitle>
                <SheetDescription className="text-white/60">
                    {project.role} — {project.year}
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-8 px-4 pb-8">
                <div>
                    <h4 className="text-accent font-semibold mb-3">Fonctionnalités</h4>
                    <ul className="space-y-2">
                        {project.caseStudy.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-accent font-semibold mb-3">Défis techniques</h4>
                    <ul className="space-y-2">
                        {project.caseStudy.challenges.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-accent font-semibold mb-3">Apprentissages</h4>
                    <ul className="space-y-2">
                        {project.caseStudy.learnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {isValidLink(project.videoUrl) && (
                    <Link
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-accent hover:underline text-sm"
                    >
                        <BsPlayFill className="text-xl" />
                        Voir la démo vidéo
                    </Link>
                )}
            </div>
        </SheetContent>
    </Sheet>
);

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("Tous");
    const [projectIndex, setProjectIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const imageSwiperRef = useRef(null);

    const filteredProjects = useMemo(() => {
        if (activeFilter === "Tous") return projectList;
        return projectList.filter((p) => p.tags.includes(activeFilter));
    }, [activeFilter]);

    const project = filteredProjects[projectIndex] ?? filteredProjects[0];
    const stack = project?.stack ?? [];
    const images = project?.images ?? [];

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setProjectIndex(0);
        setImageIndex(0);
        imageSwiperRef.current?.slideTo(0);
    };

    const handleProjectSelect = (index) => {
        setProjectIndex(index);
        setImageIndex(0);
        imageSwiperRef.current?.slideTo(0);
    };

    if (!project) {
        return (
            <section className="min-h-[80vh] flex items-center justify-center">
                <p className="text-white/60">Aucun projet dans cette catégorie.</p>
            </section>
        );
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto flex flex-col gap-10 xl:gap-16">
                {/* Filtres */}
                <div className="flex flex-wrap justify-center xl:justify-start gap-3">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeFilter === filter
                                    ? "bg-accent text-primary"
                                    : "bg-[#232329] text-white hover:bg-white/10"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col xl:flex-row gap-8 xl:gap-[30px]">
                    {/* Galerie */}
                    <div className="w-full xl:w-[50%] order-1 xl:order-2 flex flex-col gap-4">
                        <Swiper
                            key={project.id}
                            className="work-swiper w-full"
                            slidesPerView={1}
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            navigation
                            onSwiper={(swiper) => {
                                imageSwiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => setImageIndex(swiper.activeIndex)}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-[280px] sm:h-[360px] xl:h-[460px]">
                                        <ProjectImage
                                            src={img.src}
                                            alt={img.alt}
                                            priority={index === 0}
                                            sizes="(max-width: 1280px) 100vw, 50vw"
                                            className="absolute inset-0"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Miniatures images */}
                        {images.length > 1 && (
                            <div className="flex gap-3 justify-center xl:justify-start">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => imageSwiperRef.current?.slideTo(index)}
                                        className={cn(
                                            "relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300",
                                            imageIndex === index
                                                ? "border-accent"
                                                : "border-transparent opacity-60 hover:opacity-100"
                                        )}
                                    >
                                        <ProjectImage
                                            src={img.src}
                                            alt={img.alt}
                                            className="absolute inset-0"
                                            sizes="80px"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Miniatures projets */}
                        <div className="flex gap-3 justify-center xl:justify-start flex-wrap">
                            {filteredProjects.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleProjectSelect(index)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300",
                                        projectIndex === index
                                            ? "border-accent bg-accent/10"
                                            : "border-white/10 bg-[#232329] hover:border-white/30"
                                    )}
                                >
                                    <div className="relative w-10 h-10 rounded-md overflow-hidden shrink-0">
                                        <ProjectImage
                                            src={item.images[0].src}
                                            alt={item.title}
                                            className="absolute inset-0"
                                            sizes="40px"
                                        />
                                    </div>
                                    <span className="text-sm text-white font-medium hidden sm:block">
                                        {item.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contenu */}
                    <div className="w-full xl:w-[50%] xl:min-h-[460px] flex flex-col justify-center order-2 xl:order-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-5 xl:gap-[30px]"
                            >
                                <div className="text-6xl xl:text-8xl leading-none font-extrabold text-outline text-transparent">
                                    {project.id}
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                    <span className="text-accent">{project.year}</span>
                                    <span className="text-white/30">•</span>
                                    <span className="text-white/60">{project.role}</span>
                                    <span className="text-white/30">•</span>
                                    <span
                                        className={cn(
                                            "px-3 py-0.5 rounded-full text-xs font-medium",
                                            project.status === "En production"
                                                ? "bg-accent/20 text-accent"
                                                : "bg-white/10 text-white/60"
                                        )}
                                    >
                                        {project.status}
                                    </span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight text-white capitalize">
                                    {project.category} project
                                </h2>

                                <h3 className="text-xl xl:text-2xl font-semibold text-accent">
                                    {project.title}
                                </h3>

                                <p className="text-sm xl:text-base text-white/60 max-w-[500px]">
                                    {project.description}
                                </p>

                                <ul className="space-y-1.5">
                                    {project.results.map((result, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-sm text-white/70"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                            {result}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="flex flex-wrap items-center gap-3 xl:gap-4">
                                    {stack.map((item, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="text-2xl xl:text-3xl text-white hover:text-accent transition-all duration-300">
                                                        {item.icon}
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-b border-white/20 w-full" />

                                <div className="flex flex-wrap items-center gap-4">
                                    <ActionButton
                                        href={project.url}
                                        icon={BsArrowUpRight}
                                        label="Live Project"
                                        disabled={!isValidLink(project.url)}
                                    />
                                    <ActionButton
                                        href={project.github}
                                        icon={BsGithub}
                                        label="Github Repository"
                                        disabled={!isValidLink(project.github)}
                                    />
                                    <CaseStudySheet project={project} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 xl:p-10 rounded-2xl bg-[#232329] border border-white/10">
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl xl:text-2xl font-bold text-white mb-2">
                            Un projet similaire ?
                        </h3>
                        <p className="text-white/60 text-sm xl:text-base max-w-md">
                            Discutons de votre idée et transformons-la en solution numérique
                            performante.
                        </p>
                    </div>
                    <Link href="/contact">
                        <Button size="lg" className="uppercase">
                            Contactez-moi
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
