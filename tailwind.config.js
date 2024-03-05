import forms from '@tailwindcss/forms';
import plugin from 'tailwindcss/plugin';

const customColors = {
  'flush-mahogany': {
    50: '#fef2f3',
    100: '#fde3e5',
    200: '#fcccd0',
    300: '#f9a8ae',
    400: '#f37680',
    500: '#e84b58',
    600: '#cc2936',
    700: '#b3222e',
    800: '#942029',
    900: '#7b2128',
    950: '#430c10'
  },
  'venice-blue': {
    50: '#f0faff',
    100: '#e0f4fe',
    200: '#bae6fd',
    300: '#7dd0fc',
    400: '#38b5f8',
    500: '#0e9de9',
    600: '#0282c7',
    700: '#036aa1',
    800: '#075985',
    900: '#0c4c6e',
    950: '#083249'
  },
  'black-pearl': {
    50: '#f3f7fc',
    100: '#e5eff9',
    200: '#c5ddf2',
    300: '#93c1e6',
    400: '#59a1d7',
    500: '#3486c3',
    600: '#246aa5',
    700: '#1e5586',
    800: '#1d486f',
    900: '#1d3e5d',
    950: '#0d1b2a'
  }
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.{vue,js}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...customColors,
        primary: customColors['venice-blue'],
        secondary: customColors['flush-mahogany'],
        'logo-primary': customColors['venice-blue'][800],
        'logo-secondary': customColors['flush-mahogany'][600],
        'text-default': customColors['black-pearl'][900]
      },
      fontFamily: {
        body: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Roboto', 'Georgia', 'serif']
      },
      screens: {
        xs: '425px'
      }
    }
  },
  plugins: [
    forms,
    plugin(function ({ addBase, addComponents, addVariant, addUtilities, theme }) {
      ['error', 'filled', 'processing'].forEach((variant) => {
        addVariant(variant, [`&[data-${variant}=true]`, `[data-${variant}=true] &`]);
      });

      addBase({
        'html,body': {
          backgroundColor: '#fff',
          color: theme('colors.text-default'),
          '@apply antialiased': {},
          fontSize: '16px',
          '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
          fontFamily: theme('fontFamily.body')
        }
      });

      addComponents({});

      addUtilities({});
    })
  ]
};
