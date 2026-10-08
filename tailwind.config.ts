import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { cream: '#fdf8f0', 'cream-dark': '#f5ead8', 'cream-mid': '#efe3cc', bordeaux: '#8b2635', 'bordeaux-dark': '#6b1c29', terracotta: '#c17a3a', gold: '#c8a95a', ink: '#2d1f0e', 'ink-light': '#5c3d2e', 'ink-muted': '#8a6a52', border: '#d4b896', 'border-light': '#e8d9c3' },
      fontFamily: { display: ['Cormorant Garamond', 'Georgia', 'serif'], script: ['Dancing Script', 'cursive'], body: ['Lora', 'Georgia', 'serif'] },
      boxShadow: { recipe: '0 6px 20px rgba(45,31,14,0.15)', soft: '0 14px 40px rgba(45,31,14,0.22)' },
    },
  },
  plugins: [],
} satisfies Config
