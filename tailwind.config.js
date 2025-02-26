/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        header: "0px 2px 10px 0px rgba(15, 25, 40, 0.2)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        akira: ["AkiraExpanded", "sans-serif"],
      },
      colors: {
        main: "#111112",
        bg: {
          white: "#FCFCFF",
          disabled: "#F0F0F3",
          lightGrey: "#E4E7EB",
        },
        text: {
          white: "#FCFCFF",
          grey: "#3F4753",
          middleGrey: "#6F757E",
          disabled: "#CFD1D4",
        },
        button: {
          primary: {
            bg: {
              DEFAULT: "#111112",
              hover: "#3F4753",
              focused: "#6F757E",
              active: "#27303E",
              click: "#0F1928",
            },
            text: {
              DEFAULT: "#FCFCFF",
              hover: "#EBEBF1",
              focused: "#FCFCFF",
              active: "#FCFCFF",
              click: "#FFFFFF",
            },
          },
          secondary: {
            bg: {
              hover: "#111112",
              focused: "#E5E8EE",
              active: "#E5E8EE",
              click: "#27303E",
            },
            text: {
              DEFAULT: "#111112",
              hover: "#FCFCFF",
              focused: "#111112",
              active: "#111112",
              click: "#F3F3F4",
            },
          },
          tertiary: {
            bg: {
              hover: "#111112",
              focused: "#E5E8EE",
              active: "#E5E8EE",
              click: "#9FA3A9",
            },
            text: {
              DEFAULT: "#111112",
              hover: "#E5E5E6",
              focused: "#111112",
              active: "#111112",
              click: "#27303E",
            },
          },
          bg: {
            disabled: "#F3F3F4",
          },
          text: {
            disabled: "#CFD1D4",
          },
        },
        stroke: {
          black: "#111112",
          grey: "#9FA3A9",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundColor:
        '({ theme }) => ({\n        ...theme("colors.bg"),\n        ...theme("colors.button.primary.bg"),\n      })',
      textColor:
        '({ theme }) => ({\n        ...theme("colors.text"),\n        ...theme("colors.button.primary.text"),\n      })',
      borderColor:
        '({ theme }) => ({\n        ...theme("colors.stroke"),\n        ...theme("colors.button.primary.stroke"),\n      })',
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addComponents, theme }) {
      addComponents({
        ".text-h1": {
          fontSize: "64px",
          lineHeight: "76.8px",
          fontWeight: "700",
          [`@media (max-width: ${theme("screens.lg")})`]: {
            fontSize: "48px", // Уменьшаем размер для маленьких экранов
            lineHeight: "56px",
          },
        },
        ".text-h1Akira": {
          fontFamily: "'AkiraExpanded', sans-serif",
          fontWeight: "800",
          fontSize: "160px",
          lineHeight: "184.06px",
        },
        ".text-h2": {
          fontSize: "48px",
          lineHeight: "56px",
          fontWeight: "700",
        },
        ".text-h2Akira": {
          fontFamily: "'AkiraExpanded', sans-serif",
          fontWeight: "700",
          fontSize: "96px",
          lineHeight: "104px",
        },
        ".text-h3": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "600",
        },
        ".text-h4": {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "600",
        },
        ".text-h5": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "600",
        },
        ".text-body1": {
          fontSize: "16px",
          lineHeight: "24px",
          textTransform: "uppercase",
        },
        ".text-body2": {
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".text-button-large": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-normal": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-medium": {
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 500,
          textTransform: "uppercase",
        },
        ".text-button-small": {
          fontSize: "14px",
          lineHeight: "16px",
          textTransform: "uppercase",
        },
        ".text-button-xs": {
          fontSize: "14px",
          lineHeight: "16px",
        },
      });
    },
  ],
};
