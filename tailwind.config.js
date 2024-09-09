/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

// Scale directly, using `scale()` instead of `transform: scale()`
function dScalePlugin({ addUtilities, theme }) {
  const scales = theme('scale');
  const utilities = Object.entries(scales).reduce((acc, [k, v]) => {
    acc['.d-scale-x-' + k] = { scale: `${v} 1` };
    acc['.-d-scale-x-' + k] = { scale: `-${v} 1` };
    return acc;
  }, {});

  addUtilities(utilities);
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: '#app',
  theme: {
    extend: {
      aspectRatio: {
        'wide-portrait': '4/5',
        academy: '1.37',
        wider: '2.1',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        hpx: '0.5px',
        px: '1px',
      },
      colors: {
        sand: {
          DEFAULT: '#EDE5D8',
          600: '#AC9E86',
        },
        cacao: '#744441',
        coco: '#36261A',
        milk: '#F8F5EF',
      },
      fontSize: {
        xxs: ['.5rem', '1'],
        lg: ['1.25rem', '1'],
        xl: ['1.75rem', '1.1'],
        '2xl': ['2.25rem', '1'],
        '3xl': ['2.5rem', '1'],
        '4xl': ['3rem', '1'],
      },
      letterSpacing: {
        normal: '.1em',
        wide: '.125em',
        wider: '.25em',
      },
      screens: {
        fhd: '1920px',
        qhd: '2560px',
      },
      spacing: {
        hpx: '0.5px',
        xw: '960px',
      },
    },
  },
  plugins: [dScalePlugin, require('@tailwindcss/container-queries')],
};
