/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scrollSnapType: {
        y: 'y var(--tw-scroll-snap-strictness)',
      },
      scrollSnapStrictness: {
        mandatory: 'mandatory',
      },
    },
  },
  plugins: [],
};