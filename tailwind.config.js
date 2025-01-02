/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Correct path to your index.html in the root directory
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all relevant files in the src folder
  ],
  theme: {
    extend: {}, // Add custom styles if needed
  },
  plugins: [], // Add plugins here if necessary
};
