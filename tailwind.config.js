/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ide: {
          // Main backgrounds
          bg: {
            primary: '#1E1E1E',
            secondary: '#252526',
            dropdown: '#2D2D2D',
            active: '#37373D'
          },
          // Text colors
          text: {
            primary: '#D4D4D4',
            secondary: '#A7A7A7',
            disabled: '#6C6C6C',
            link: '#569CD6'
          },
          // UI elements
          ui: {
            button: {
              DEFAULT: '#3C3C3C',
              hover: '#454545',
              active: '#505050'
            },
            icon: '#CCCCCC',
            border: '#404040'
          },
          // Syntax highlighting
          syntax: {
            keyword: '#569CD6',
            string: '#CE9178',
            number: '#B5CEA8',
            comment: '#6A9955',
            function: '#DCDCAA',
            variable: '#9CDCFE'
          },
          // Status indicators
          status: {
            error: '#F14C4C',
            warning: '#CCA700',
            success: '#4EC9B0',
            info: '#75BEFF'
          }
        }
      }
    },
  },
  plugins: [],
};
