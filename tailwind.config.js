/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smooth: {
          "0%": { transform: "translateY(-5px)" },

          "50%": { transform: "translateY(5px)" },

          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "smooth 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
