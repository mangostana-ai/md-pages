/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#07c160',
          dark: '#06ae56',
        },
        background: {
          DEFAULT: '#f8f8f8',
          dark: '#1a1a1a',
        },
        text: {
          DEFAULT: '#333333',
          dark: '#e5e5e5',
        },
        border: {
          DEFAULT: '#e5e5e5',
          dark: '#333333',
        },
      },
      backgroundColor: {
        DEFAULT: '#f8f8f8',
        dark: '#1a1a1a',
      },
      textColor: {
        DEFAULT: '#333333',
        dark: '#e5e5e5',
      },
      borderColor: {
        DEFAULT: '#e5e5e5',
        dark: '#333333',
      },
    },
  },
  plugins: [],
}
