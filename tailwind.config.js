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
        // Hatsune Miku color palette
        miku: {
          cyan: '#00DDDD',
          teal: '#00AAAA',
          dark: '#003333',
          light: '#AAFFFF',
          accent: '#FF6B9D',
          gray: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slideUp': 'slideUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00DDDD, 0 0 10px #00DDDD, 0 0 15px #00DDDD' },
          '100%': { boxShadow: '0 0 20px #00DDDD, 0 0 30px #00DDDD, 0 0 40px #00DDDD' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}