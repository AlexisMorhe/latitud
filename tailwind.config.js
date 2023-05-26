/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        cormorant: ['var(--font-cormorant-upright)'],
        karla: ['var(--font-karla)'],
      },
      colors: {
        'secondary-blue': 'rgb(13, 80, 140)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
