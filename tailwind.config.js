/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./registry/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        learn: {
          cream: "#F9F9F6",
          night: "#0B1F26",
          ink: "#1E2A2E",
          teal: "#0B5F62",
          "teal-bright": "#26A9AB",
          gold: "#FAAB36",
          muted: "#4A585E",
        },
      },
      borderRadius: {
        pill: "9999px",
        card: "1.25rem",
      },
      boxShadow: {
        learn: "0 8px 32px rgba(11, 31, 38, 0.12)",
        "learn-lg": "0 24px 60px rgba(11, 31, 38, 0.16)",
      },
      screens: {
        learnDesktop: "1024px",
      },
    },
  },
  plugins: [],
};
