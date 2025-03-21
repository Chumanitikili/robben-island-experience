/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        accent: '#CA0000',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-sofia-pro)', 'sans-serif'],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
}