/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      backgroundImage: {
        'sf': "url('/sf.jpg')",
      },
    }
  },
  variants: {},
  plugins: [],
}
