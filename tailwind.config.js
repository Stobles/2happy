/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    borderRadius: {
      none: "0px",
      xs: "2px",
      full: "50%",
    },
    extend: {
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        cartCard: "minmax(60px, 120px) 152px minmax(60px, 120px) 80px",
        addition:
          "minmax(296px, 496px) minmax(286px, 150px) minmax(286px, 150px)",
      },
      gridTemplateRows: {
        addition: "408px 232px",
      },
      cursor: {
        default: "url('/icons/system/cursor-arrow.svg') 2 2, default",
        pointer: "url('/icons/system/cursor-pointer.svg') 2 2, default",
      },
      margin: {
        section: "136px",
      },
      zIndex: {
        "behind-header": "50",
        "behind-header-2": "60",
        header: "100",
        "over-header": "150",
      },
      boxShadow: {
        header: "0px 2px 10px 0px rgba(15, 25, 40, 0.2)",
        around: "0px 0px 70px -30px rgba(0, 0, 0, 1)",
        feature:
          " 0px -2px 10px 0px rgba(255, 255, 255, 0.3) inset, 0px 20px 30px 0px rgba(48, 48, 48, 0.25)",
        "elevation-1": "0px 4px 4px 0px rgba(17, 17, 18, 0.2)",
        "elevation-2": "0px 4px 8px 0px rgba(37, 40, 43, 0.2)",
        "elevation-3": "0px 8px 16px 0px rgba(17, 17, 18, 0.2)",
        "elevation-4":
          "0px 8px 20px 8px rgba(17, 17, 18, 0.16), 0px -8px 20px -8px rgba(17, 17, 18, 0.16)",
        "elevation-5": "0px 20px 30px 0px rgba(0, 0, 0, 0.1)",
        "elevation-6": "0px 6px 12px 0px rgba(0, 0, 0, 0.1)",
      },
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-4":
          "linear-gradient(180deg, #FCFCFF8D -22.24%, rgba(0, 0, 0, 0) 100%)",
        "gradient-7": "linear-gradient(360deg, #111112 0%, #F0F0F3 98.1%)",

        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ["var(--font-lato)"],
        akira: ["var(--font-akira)"],
      },
      colors: {
        main: "#111112",
        white: {
          DEFAULT: "#FCFCFF",
          secondary: "#DEDEE9",
        },
        red: "#F93232",
        yellow: "#FFB82E",
        green: "#439F6E",
        "light-disabled": "#F0F0F3",
        "dark-disabled": "#CACED4",
        gray: {
          DEFAULT: "#9EA4AE",
          dark: "#3F4753",
          middle: "#6F757E",
          light: "#E4E7EB",
        },
        bg: {
          glass: "rgba(255, 255, 255, 0.3)",
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
        status: {
          success: "#439F6E",
          warning: "#FFB82E",
          error: "#F93232",
          "muted-error": "#FDE6E6",
          "muted-warning": "#FFFBF4",
          "muted-success": "#F1FFF4",
        },
        stroke: {
          black: "#111112",
          grey: "#9FA3A9",
          success: "#C0ECD4",
          warning: "#FFEAC1",
          error: "#FF7E7E",
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
        '({ theme }) => ({\\n        ...theme("colors.bg"),\\n        ...theme("colors.button.primary.bg"),\\n      })',
      textColor:
        '({ theme }) => ({\\n        ...theme("colors.text"),\\n        ...theme("colors.button.primary.text"),\\n      })',
      borderColor:
        '({ theme }) => ({\\n        ...theme("colors.stroke"),\\n        ...theme("colors.button.primary.stroke"),\\n      })',
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "collapsible-down": {
          from: {
            height: 0,
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: 0,
          },
        },
        "accordion-down": {
          "0%": {
            height: "0",
          },
          "100%": {
            flexShrink: "1",
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      transitionDuration: {
        5000: "5000ms",
      },
      animation: {
        "collapsible-down": "collapsible-down 0.3s ease-out",
        "collapsible-up": "collapsible-up 0.3s ease-out",
        "accordion-down":
          "accordion-down 0.2s ease-out, shrink-from-0-to-1 0.2s ease-out 0.2s forwards",
        "accordion-up": "accordion-up 0.2s ease-out",
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
            fontSize: "48px",
            lineHeight: "56px",
          },
        },

        ".text-h1-table": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: "600",
        },

        // Text/Headlines

        ".text-h1Akira": {
          fontFamily: "var(--font-akira)",
          fontWeight: "700",
          fontSize: "96px",
          lineHeight: "104px",
        },
        ".text-h2": {
          fontSize: "48px",
          lineHeight: "56px",
          fontWeight: "700",
          textTransform: "uppercase",
        },
        ".text-h2Akira": {
          fontFamily: "var(--font-akira)",
          fontWeight: "700",
          fontSize: "48px",
          lineHeight: "56px",
        },
        ".text-h3": {
          fontSize: "32px",
          lineHeight: "40px",
          fontWeight: "600",
          textTransform: "uppercase",
        },
        ".text-h4": {
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: "600",
          textTransform: "uppercase",
        },
        ".text-h5": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "600",
          textTransform: "uppercase",
        },

        // Text/Body

        ".text-body1": {
          fontSize: "16px",
          lineHeight: "24px",
          textTransform: "uppercase",
        },
        ".text-body2": {
          fontSize: "16px",
          lineHeight: "24px",
        },

        // Text/Fields

        ".text-title": {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-description": {
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-placeholder": {
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
        },

        // Text/Button

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

        // Table
        ".text-table-header": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: 600,
          textTransform: "uppercase",
        },

        ".text-table-cell": {
          fontSize: "14px",
          lineHeight: "16px",
        },

        // Button/Hover

        ".primary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.primary.text.hover"),
          },
        },
        ".primary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.primary.text.focused"),
          },
        },
        ".primary-svg-active": {
          "& svg": {
            fill: theme("colors.button.primary.text.active"),
          },
        },

        ".secondary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.secondary.text.hover"),
          },
        },
        ".secondary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.secondary.text.focused"),
          },
        },
        ".secondary-svg-active": {
          "& svg": {
            fill: theme("colors.button.secondary.text.active"),
          },
        },

        ".tertiary-svg-hover": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.hover"),
          },
        },
        ".tertiary-svg-focused": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.focused"),
          },
        },
        ".tertiary-svg-active": {
          "& svg": {
            fill: theme("colors.button.tertiary.text.active"),
          },
        },
        ".svg-disabled": {
          "& svg": {
            fill: theme("colors.button.text.disabled"),
          },
        },

        // Other

        ".header-hover": {
          borderBottom: 0,
          boxShadow: "none",
        },

        ".icon-glass-hover": {
          background: theme("colors.bg.glass"),
          borderRadius: "3px",
        },
      });
    },
  ],
};
