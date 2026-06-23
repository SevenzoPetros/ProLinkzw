import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        night: {
          DEFAULT: "#0B1220",
          50: "#1A2436",
          100: "#121B2C",
          200: "#0B1220",
          300: "#070C16",
        },
        mist: {
          DEFAULT: "#F5F6F8",
          50: "#FFFFFF",
          100: "#F5F6F8",
          200: "#EAECEF",
          300: "#DCE0E5",
        },
        ink: {
          DEFAULT: "#14181F",
          muted: "#525A68",
          soft: "#8590A1",
        },
        copper: {
          50: "#FBF1E6",
          100: "#F3DAB6",
          200: "#E8B854",
          300: "#D99A3D",
          400: "#C8762A",
          500: "#A85F1F",
          600: "#824916",
        },
        teal: {
          50: "#E6F6F2",
          100: "#B7E6DA",
          200: "#5FCBAE",
          300: "#2EB698",
          400: "#1B9C82",
          500: "#147F69",
          600: "#0F6354",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(20,24,31,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,24,31,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(245,246,248,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,246,248,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(200,118,42,0.16), transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px -8px rgba(11,18,32,0.08)",
        "card-hover":
          "0 1px 2px rgba(11,18,32,0.06), 0 16px 40px -12px rgba(11,18,32,0.16)",
        glow: "0 0 0 1px rgba(200,118,42,0.25), 0 8px 30px -4px rgba(200,118,42,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
