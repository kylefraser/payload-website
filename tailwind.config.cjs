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
      colors: {
        green: {
          dark: {
            1: '#050e05',
            2: '#0f1a10',
            3: '#112c13',
            4: '#043e0d',
            5: '#024d10',
            6: '#005d13',
            7: '#006f15',
            8: '#008213',
            9: '#a7ffa9',
            10: '#9df5a0',
            11: '#64d46b',
            12: '#a3fba5',

            a1: '#0041cd05',
            a2: '#69ddf110',
            a3: '#47fd8d21',
            a4: '#00fe3c34',
            a5: '#00fd3a44',
            a6: '#00fd3755',
            a7: '#00fd3268',
            a8: '#00fd267c',
            a9: '#a7ffa9',
            a10: '#a3fea7f5',
            a11: '#77ff82d2',
            a12: '#a6ffa8fb',

            contrast: '#152715',
            surface: '#15271f80',
            indicator: '#a7ffa9',
            track: '#a7ffa9',
          },
        },
        gray: {
          dark: {
            1: '#050e05',
            2: '#101b10',
            3: '#182518',
            4: '#1e2d1e',
            5: '#233624',
            6: '#29402a',
            7: '#325033',
            8: '#456b47',
            9: '#527854',
            10: '#608661',
            11: '#97bf98',
            12: '#e5f1e5',

            a1: '#0041cd05',
            a2: '#79edf110',
            a3: '#9df9e31a',
            a4: '#a7fddb22',
            a5: '#a0fbcc2c',
            a6: '#a1fec336',
            a7: '#9dfeb547',
            a8: '#a2fdb364',
            a9: '#aeffbc71',
            a10: '#b7ffc180',
            a11: '#caffcebc',
            a12: '#f2fef2f1',

            contrast: '#FFFFFF',
            surface: 'rgba(0, 0, 0, 0.05)',
            indicator: '#527854',
            track: '#527854',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
      keyframes: {
        glide: {
          '0%, 100%': {
            transform: 'translateX(-300px) translateY(-100px) rotate(10deg)',
          },
          '50%': {
            transform: 'translateX(0px) translateY(0) rotate(-10deg)',
          },
        },
      },
      animation: {
        glide: 'glide 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
