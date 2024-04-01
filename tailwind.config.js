/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
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
        light: {
          fondo: "#F2F2F2",
          texto: "#333333",
          "acento-1": "#007BFF",
          "acento-2": "#66CCCC",
        },
        dark: {
          fondo: "#222222",
          texto: "#CCCCCC",
          "acento-1": "#4D8DB0",
          "acento-2": "#669999",
        },
        protanopia: {
          light: {
            "acento-1": "#0C8AFF",
            "acento-2": "#C1C4CC",
          },
          dark: {
            "acento-1": "#7C8CB2",
            "acento-2": "#939499",
          },
        },
        deuteranopia: {
          light: {
            "acento-1": "#0076FC",
            "acento-2": "#AFB7CD",
          },
          dark: {
            "acento-1": "#6F81AF",
            "acento-2": "#898D99",
          },
        },
        tritanopia: {
          light: {
            "acento-1": "#009CB1",
            "acento-2": "#1DD1CC",
          },
          dark: {
            "acento-1": "#009699",
            "acento-2": "#529C99",
          },
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
