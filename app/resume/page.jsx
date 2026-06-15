"use client";

import Image from "next/image";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGraduationCap,
    FaSchool,
    FaLaptopCode,
    FaCreditCard,
    FaGlobe,
    FaMobileAlt,
    FaBriefcase,
    FaCode,
    FaUser,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
    SiTailwindcss,
    SiPostgresql,
    SiLinux,
    SiNextdotjs,
    SiFlutter,
    SiTypescript,
    SiDart,
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const resumeTabs = [
    { value: "experience", label: "Expérience", icon: <FaBriefcase /> },
    { value: "education", label: "Formation", icon: <FaGraduationCap /> },
    { value: "skills", label: "Compétences", icon: <FaCode /> },
    { value: "about", label: "À propos", icon: <FaUser /> },
];

const tabTriggerClass =
    "capitalize flex-none w-full xl:w-[200px] h-10 text-sm xl:text-base rounded-lg border border-transparent shadow-none bg-[#232329] text-white data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-transparent data-[state=active]:shadow-none flex items-center justify-center gap-2";

const about = {
    title: "About Me",
    description:
        "Développeur Full Stack Web et Mobile avec une expertise en Flutter, Next.js et développement d'applications métier. Passionné par l'innovation, le développement assisté par l'IA et la création de solutions numériques performantes, évolutives et adaptées aux besoins des entreprises.",
    info: [
        { fieldName: "Name", fieldValue: "Olivier Mutombo" },
        { fieldName: "Phone", fieldValue: "(+243) 817 000 870" },
        { fieldName: "Experience", fieldValue: "3" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Nationality", fieldValue: "Congolaise" },
        { fieldName: "Location", fieldValue: "Kinshasa, République Démocratique du Congo" },
        { fieldName: "Languages", fieldValue: "English, French, Lingala" },
        { fieldName: "Email", fieldValue: "oliviermutombo449@gmail.com" },

    ],
};

const experience = {
    title: "My Experience",
    description: "My experience in the field of software development",
    items: [
        {
            company: "CyberWeb-academy",
            position: "Full Stack Developer",
            duration: "2024 - Present",
            icon: <FaLaptopCode className="text-5xl" />,
        },
        {
            company: "PayFast",
            position: "Front-End Developer",
            duration: "Present",
            icon: <FaCreditCard className="text-5xl" />,
        },
        {
            company: "Portfolio",
            position: "Full Stack Developer",
            duration: "Present",
            icon: <FaGlobe className="text-5xl" />,
        },
        {
            company: "Smart-Caisses",
            position: "Website and mobile app developer",
            duration: "Present",
            icon: <FaMobileAlt className="text-5xl" />,
        },
    ],
};

const education = {
    title: "My Education",
    description: "Parcours académique en Gestion Informatique, axé sur les systèmes d'information et le développement d'applications.",
    items: [
        {
            institution: "Hec-kin",
            degree: "Licence of Science in Computer Science",
            duration: "2024 - 2025",
            icon: <FaGraduationCap className="text-5xl" />,
        },
        {
            institution: "Hec-kin",
            degree: "Graduate of Science in Computer Science",
            duration: "2021 - 2022",
            icon: <FaGraduationCap className="text-5xl" />,
        },
        {
            institution: "College Prince of Peace",
            degree: "Bachelor of Science in Latin-Philosophy",
            duration: "2016 - 2017",
            icon: <FaSchool className="text-5xl" />,
        },
       
    ],
};

const skills = {
    title: "My Skills",
    description: "My skills in the field of software development",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTypescript />, name: "Typescript" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <FaGit />, name: "Git" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiDart />, name: "Dart" },
        { icon: <TbApi />, name: "API Rest" },
    ],
};

const CardLogo = ({ icon }) => {
    if (typeof icon === "string") {
        return (
            <div className="relative w-[60px] h-[60px] shrink-0">
                <Image src={icon} alt="" fill className="object-contain" />
            </div>
        );
    }

    return (
        <div className="text-white/80 shrink-0 flex items-center justify-center">
            {icon}
        </div>
    );
};

const ResumeCard = ({ duration, title, subtitle, icon }) => (
    <li className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex justify-between items-center gap-6">
        <div className="flex flex-col justify-center items-center lg:items-start gap-1">
            <span className="text-accent">{duration}</span>
            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                {title}
            </h3>
            <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{subtitle}</p>
            </div>
        </div>
        {icon && <CardLogo icon={icon} />}
    </li>
);

const Experience = () => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold capitalize">{experience.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {experience.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {experience.items.map((item, index) => (
                <ResumeCard
                    key={index}
                    duration={item.duration}
                    title={item.position}
                    subtitle={item.company}
                    icon={item.icon}
                />
            ))}
        </ul>
    </div>
);

const Education = () => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold capitalize">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {education.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            {education.items.map((item, index) => (
                <ResumeCard
                    key={index}
                    duration={item.duration}
                    title={item.degree}
                    subtitle={item.institution}
                    icon={item.icon}
                />
            ))}
        </ul>
    </div>
);

const Skills = () => (
    <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold capitalize">{skills.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
            </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 xl:gap-[30px]">
            {skills.skillList.map((skill, index) => (
                <li key={index}>
                    <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </li>
            ))}
        </ul>
    </div>
);

const About = () => (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold capitalize">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {about.description}
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {about.info.map((item, index) => (
                <li
                    key={index}
                    className="flex items-center justify-center xl:justify-start gap-4"
                >
                    <span className="text-white/60">{item.fieldName}</span>
                    <span>{item.fieldValue}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row xl:items-start gap-8 xl:gap-[60px]"
                >
                    <TabsList className="grid grid-cols-2 xl:flex xl:flex-col w-full max-w-none xl:max-w-[220px] mx-auto xl:mx-0 xl:self-start shrink-0 gap-3 xl:gap-4 h-auto bg-transparent p-0">
                        {resumeTabs.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className={tabTriggerClass}
                            >
                                <span className="text-base">{tab.icon}</span>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="flex-1 w-full">
                        <TabsContent value="experience" className="m-0">
                            <Experience />
                        </TabsContent>
                        <TabsContent value="education" className="m-0">
                            <Education />
                        </TabsContent>
                        <TabsContent value="skills" className="m-0">
                            <Skills />
                        </TabsContent>
                        <TabsContent value="about" className="m-0">
                            <About />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
