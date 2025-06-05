// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Must include jsx/tsx files
  ],
  theme: {
    extend: { boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" },
  },
  plugins: [],
};
