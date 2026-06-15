import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex flex-col items-center justify-center py-12 text-center">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <h1 className="text-8xl xl:text-[120px] font-extrabold text-outline text-transparent leading-none">
                    404
                </h1>
                <div className="flex flex-col gap-4 max-w-md">
                    <h2 className="text-2xl xl:text-3xl font-bold text-white">
                        Page introuvable
                    </h2>
                    <p className="text-white/60">
                        La page que vous recherchez n&apos;existe pas ou a été
                        déplacée.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/">
                        <Button size="lg" className="uppercase">
                            Retour à l&apos;accueil
                        </Button>
                    </Link>
                    <Link href="/work">
                        <Button variant="outline" size="lg" className="uppercase">
                            Voir mes projets
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
