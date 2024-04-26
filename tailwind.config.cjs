/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
    },
    keyframes: {
      glide: {
        '0%, 100%': { transform: 'translateX(-300px) translateY(-100px) rotate(10deg)' },
        '50%': { transform: 'translateX(0px) translateY(0) rotate(-10deg)' },
      },
    },
    animation: {
      glide: 'glide 5s ease-in-out infinite',
    },
  },
  plugins: [],
}
