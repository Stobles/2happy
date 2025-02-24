"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h1Akira: React.CSSProperties;
    h2Akira: React.CSSProperties;
    button: {
      large: React.CSSProperties;
      normal: React.CSSProperties;
      medium: React.CSSProperties;
      small: React.CSSProperties;
      extraSmall: React.CSSProperties;
    };
  }

  interface TypographyVariantsOptions {
    h1Akira?: React.CSSProperties;
    h2Akira?: React.CSSProperties;
    button?: {
      large?: React.CSSProperties;
      normal?: React.CSSProperties;
      medium?: React.CSSProperties;
      small?: React.CSSProperties;
      extraSmall?: React.CSSProperties;
    };
  }

  interface CustomButtonPalette {
    text?: {
      default?: string;
      hover?: string;
      focused?: string;
      active?: string;
      click?: string;
      disabled?: string;
    };
    bg?: {
      default?: string;
      hover?: string;
      focused?: string;
      active?: string;
      click?: string;
      disabled?: string;
    };
  }
  interface Palette {
    stroke: {
      focused: string;
      gray: string;
    };
    button: {
      primary: CustomButtonPalette;
      secondary: CustomButtonPalette;
      tertiary: CustomButtonPalette;
      radialGradient: string;
    };
  }
  interface PaletteOptions {
    stroke?: {
      focused?: string;
      gray?: string;
    };
    button?: {
      primary?: CustomButtonPalette;
      secondary?: CustomButtonPalette;
      tertiary?: CustomButtonPalette;
      radialGradient?: string;
    };
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1Akira: true;
    h2Akira: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320, // Изменено с 600px на 320px
      md: 640, // Изменено с 960px на 640px
      lg: 1280, // Изменено с 1200px на 1280px
      xl: 1600, // Изменено с 1920px на 1600px
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: "76.8px",
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "48px", // Для sm и выше
        lineHeight: "52.8px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "24px", // Для sm и выше
        lineHeight: "28.8px",
      },
    },
    h1Akira: {
      fontFamily: '"AkiraExpanded", sans-serif',
      fontWeight: 800,
      fontSize: "160px",
      lineHeight: "184.06px",
      letterSpacing: "8%",
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "48px", // Для sm и выше
        lineHeight: "56px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "24px", // Для sm и выше
        lineHeight: "28.8px",
        letterSpacing: "0%",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "56px",
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "32px", // Для sm и выше
        lineHeight: "38px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "20px", // Для sm и выше
        lineHeight: "24px",
      },
    },
    h2Akira: {
      fontFamily: '"AkiraExpanded", sans-serif',
      fontWeight: 700,
      fontSize: "96px",
      lineHeight: "104px",
      letterSpacing: "8%",
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "32px",
        lineHeight: "38.4px",
        letterSpacing: "0%",
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: "19.2px",
        letterSpacing: "0%",
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "40px",
      [createTheme().breakpoints.down("lg")]: {
        fontWeight: 700,
        fontSize: "24px", // Для sm и выше
        lineHeight: "28.8px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontWeight: 700,
        fontSize: "18px", // Для sm и выше
        lineHeight: "21.6px",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      [createTheme().breakpoints.down("lg")]: {
        fontWeight: 700,
        fontSize: "18px", // Для sm и выше
        lineHeight: "21.6px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontWeight: 700,
        fontSize: "16px", // Для sm и выше
        lineHeight: "19.2px",
      },
    },
    h5: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      [createTheme().breakpoints.down("lg")]: {
        fontWeight: 700,
        fontSize: "16px", // Для sm и выше
        lineHeight: "19.2px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontWeight: 700,
        fontSize: "14px", // Для sm и выше
        lineHeight: "16.8px",
      },
    },
    button: {
      large: {
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "24px",
        textTransform: "uppercase",
      },
      normal: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "uppercase",
      },
      medium: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        textTransform: "uppercase",
      },
      small: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",
      },
      extraSmall: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",
      },
    },
    body1: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "16px",
      lineHeight: "24px",
      textTransform: "uppercase",
      [createTheme().breakpoints.down("lg")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "20.8px",
      },
      [createTheme().breakpoints.down("md")]: {
        fontSize: "16px", // Для sm и выше
        lineHeight: "20.8px",
        textTransform: "regular",
      },
    },
    body2: {
      fontWeight: 400, // Используем Bold для body1
      fontSize: "16px",
      lineHeight: "24px",
      [createTheme().breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: "18.2px",
      },
      [createTheme().breakpoints.down("sm")]: {
        fontSize: "14px", // Для sm и выше
        lineHeight: "18.2px",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#111112",
      contrastText: "#2640E3",
      light: "#FFFEFA",
      dark: "#333B47",
    },
    secondary: {
      main: "#F3F9FE",
    },
    background: {
      default: "#FCFCFF",
    },
    button: {
      primary: {
        text: {
          default: "#FCFCFF",
          hover: "#F3F3F4",
          focused: "#FCFCFF",
          active: "#FCFCFF",
          click: "#F3F3F4",
          disabled: "#CFD1D4",
        },
        bg: {
          default: "#111112",
          hover: "#3F4753",
          focused: "#6F757E",
          active: "#27303E",
          click: "#0F1928",
          disabled: "#F3F3F4",
        },
      },
      secondary: {
        text: {
          default: "#111112",
          hover: "#FCFCFF",
          focused: "#111112",
          active: "#111112",
          click: "#F3F3F4",
          disabled: "#CFD1D4",
        },
        bg: {
          hover: "#111112",
          focused: "#F3F3F4",
          active: "#F3F3F4",
          click: "#27303E",
          disabled: "#F3F3F4",
        },
      },
      tertiary: {
        text: {
          default: "#111112",
          hover: "#F3F3F4",
          focused: "#111112",
          active: "#111112",
          click: "#27303E",
          disabled: "#CFD1D4",
        },
        bg: {
          default: "#FCFCFF",
          hover: "#111112",
          focused: "#E7E8E9",
          active: "#E7E8E9",
          click: "#9FA3A9",
          disabled: "#F3F3F4",
        },
      },
      radialGradient: "radial-gradient(#FFFFFF4D, #FFFFFF00)",
    },
  },
});

export default theme;
