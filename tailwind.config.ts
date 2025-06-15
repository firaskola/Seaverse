import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Enhanced dark theme with rich grays and oranges
        "dark-bg": "#000000",
        "dark-surface": "#121212",
        "dark-card": "#1E1E1E",
        "dark-card-hover": "#2A2A2A",
        "dark-border": "#333333",
        "dark-muted": "#666666",
        
        // Rich orange palette
        "accent-orange": "#FF6B35",
        "accent-orange-light": "#FF8C61",
        "accent-orange-lighter": "#FFA07A",
        "accent-orange-dark": "#E64A19",
        "accent-orange-darker": "#D84315",
        
        // Gradient oranges
        "orange-gradient-start": "#FF6B35",
        "orange-gradient-end": "#FF8C61",
        
        // Accent grays
        "gray-100": "#F5F5F5",
        "gray-200": "#EEEEEE",
        "gray-300": "#E0E0E0",
        "gray-400": "#BDBDBD",
        "gray-500": "#9E9E9E",
        "gray-600": "#757575",
        "gray-700": "#616161",
        "gray-800": "#424242",
        "gray-900": "#212121",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      keyframes: {
        "wave-animation": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "ripple-effect": {
          "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: "0.5" },
          "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0" },
        },
        "float-animation": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave-animation 3s ease-in-out infinite",
        "ripple-effect": "ripple-effect 0.8s ease-out forwards",
        float: "float-animation 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
