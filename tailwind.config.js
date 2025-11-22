/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
        status: {
          error: "var(--status-error)",
        },
      },
      fontFamily: {
        malayalam: ["Manjari", "sans-serif"],
        english: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
