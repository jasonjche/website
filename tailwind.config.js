/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dawn-bg': '#2A222E',
      'dawn-text': '#EEEFF1',
      'dawn-accent': '#A84376',
    },
  },
  variants: {},
  plugins: [],
}
