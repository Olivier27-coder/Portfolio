import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const socials = [
    {
        icon: <FiGithub />,
        path: "https://github.com/Olivier27-coder",
        label: "GitHub",
    },
    {
        icon: <FiLinkedin />,
        path: "https://www.linkedin.com/in/olivier-mutombo-0504a4377?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        label: "LinkedIn",
    },
    {
        icon: <FiMail />,
        path: "mailto:oliviermutombo449@gmail.com",
        label: "Email",
    },
    {
        icon: <FaWhatsapp />,        path: "https://wa.me/243817000870",
        label: "WhatsApp",
    },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link
                    href={item.path}
                    key={index}
                    target={item.path.startsWith("mailto") ? undefined : "_blank"}
                    rel={item.path.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={item.label}
                    className={iconStyles}
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
