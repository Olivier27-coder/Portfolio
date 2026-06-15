import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Olivier Mutombo | Développeur Full Stack",
  description:
    "Portfolio d'Olivier Mutombo — développeur Full Stack spécialisé en Flutter, Next.js et applications web & mobiles à Kinshasa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${jetBrainsMono.variable} flex flex-col min-h-screen`}>
          <Header />
          <StairTransition/>
         
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>

          <Footer />
           
      </body>
    </html>
  );
}
