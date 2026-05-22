import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6B35',
          light: '#FF8360'
        }
      },
      boxShadow: {
        soft: '0 35px 80px rgba(255, 107, 53, 0.12)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
} satisfies Config;
