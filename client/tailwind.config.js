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
        'blue': '#016FEB',
        'regal-blue': '#243c5a',
        'white': '#fff',
        'lightgray': '#D3D3D3',
        'light-black': '#1E1E1E',
        'ash': '#8A8A8A'
      },
      fontFamily: {
        'satoshi': 'Satoshi Variable',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      letterSpacing: {
        reallytight: '-.1em',
        tighting: '-.5em',
        tightest: '-.075em',
        lesstightest: '-0.06em',
        lessertightest: '-0.03em',
        lessertight: '-0.301em',
        lesstight: '-0.035em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      lineHeight: {
        '52': '3.25rem',
      }
    },
  },
  plugins: [],
}
