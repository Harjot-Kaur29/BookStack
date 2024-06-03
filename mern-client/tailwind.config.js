/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js', // Add Flowbite paths directly
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin], // Use the imported Flowbite plugin
};
