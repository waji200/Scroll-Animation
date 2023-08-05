/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss'
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    tailwindcss,
  ],
};
