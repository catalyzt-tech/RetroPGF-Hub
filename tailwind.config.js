/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        retro: "#FF0000",
      },
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
