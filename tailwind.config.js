/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx,jsx}",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        main: "#88aaee",
        mainAccent: "#4d80e6",
        mainBg: "#DFE5F2", // not needed for shadcn components
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#dfe5f2",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#272933",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#1b1b1b", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "6px",
      },
      boxShadow: {
        light: "5px 5px 0px 0px #000",
        dark: "5px 5px 0px 0px #000",
      },
      translate: {
        boxShadowX: "5px",
        boxShadowY: "5px",
        reverseBoxShadowX: "-5px",
        reverseBoxShadowY: "-5px",
      },
      fontWeight: {
        base: "500",
        heading: "900",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
