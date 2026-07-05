import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#030711',
        panel: '#0f172a',
        glow: '#7c3aed',
        aqua: '#38bdf8',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px rgba(56, 189, 248, 0.15)',
      },
    },
  },
  plugins: [],
} satisfies Config;
