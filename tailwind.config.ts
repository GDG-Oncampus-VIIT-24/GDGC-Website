/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

import svgToDataUri from "mini-svg-data-uri";

import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
}

// Plugin to add utilities for SVG patterns
function addSvgPatterns({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      "bg-grid": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: any) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#F5F5F5",
        grey: {
          700: "#5F6368",
          100: "#F1F3F4",
        },
        red: {
          300: "#EE928A",
          500: "#EA4335",
          600: "#E94335",
        },
        yellow: {
          300: "#EED28A",
          500: "#FBBC04",
          600: "F9AB00",
        },
        green: {
          300: "#92E3A9",
          500: "#34A853",
          600: "#0F9D58",
        },
        blue: {
          300: "#8AA9EE",
          500: "#4285F4",
        },
      },
      fontFamily: {
        GSD_Bold: "GSD-Bold",
        GSD_Regular: "GSD-Regular",
      },
      screens: {
        lg: "1600px", // Set lg to 1600px
        xl: "1920px", // Define other breakpoints if needed
        "2xl": "2048px",
      },
    },
  },
  plugins: [addVariablesForColors, addSvgPatterns],
};
