import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import { navLinks } from "@/lib/navigation";

const CV_PATH = "/cv-olivier-mutombo.pdf";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-white/10 bg-[#1a1a24]">
            <div className="container mx-auto py-12 xl:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
                    <div className="xl:col-span-1">
                        <Link href="/">
                            <h2 className="text-3xl font-semibold text-white mb-4">
                                Olivier<span className="text-accent">.</span>
                            </h2>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
                            Développeur Full Stack spécialisé en Flutter, Next.js
                            et solutions métier à Kinshasa.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigation</h3>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="text-white/60 text-sm hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="flex flex-col gap-3 text-sm text-white/60">
                            <li>
                                <a
                                    href="mailto:oliviermutombo449@gmail.com"
                                    className="hover:text-accent transition-colors"
                                >
                                    oliviermutombo449@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+243817000870"
                                    className="hover:text-accent transition-colors"
                                >
                                    (+243) 817 000 870
                                </a>
                            </li>
                            <li>Kinshasa, RDC</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Réseaux</h3>
                        <Social
                            containerStyles="flex gap-4 mb-6"
                            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-300"
                        />
                        <a
                            href={CV_PATH}
                            download
                            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                        >
                            <FiDownload />
                            Télécharger le CV
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <p>© {year} Olivier Mutombo. Tous droits réservés.</p>
                    <p>Développé avec Next.js & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
