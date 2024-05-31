/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // Include other directories if your files are located elsewhere
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

