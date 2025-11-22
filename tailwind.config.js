/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "rgb(var(--bg-primary) / <alpha-value>)",
          secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        },
        accent: {
          primary: "rgb(var(--accent-primary) / <alpha-value>)",
          secondary: "rgb(var(--accent-secondary) / <alpha-value>)",
        },
        status: {
          error: "rgb(var(--status-error) / <alpha-value>)",
        },
        // Add primary alias for compatibility
        primary: "rgb(var(--accent-primary) / <alpha-value>)",
      },
      fontFamily: {
        malayalam: ["Manjari", "sans-serif"],
        english: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
