/**
 * ⚠️ ATTENTION: Ce fichier n'est PAS utilisé avec Tailwind CSS v4
 * 
 * Avec Tailwind CSS v4 et @tailwindcss/postcss, la configuration se fait
 * directement dans le CSS via la directive @theme dans globals.css
 * 
 * Ce fichier est conservé pour référence mais n'est pas lu par Tailwind v4
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1c1c24",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
    
      },
      fontFamily: {
        primary: ["var(--font-jetBrainsMono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
