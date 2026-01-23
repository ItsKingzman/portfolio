/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'bg-tertiary': '#2a2a2a',
        text: '#e0e0e0',
        'text-secondary': '#a0a0a0',
        accent: '#3b82f6',
        'accent-hover': '#2563eb',
        border: '#333333',
      },
      spacing: {
        'spacing-sm': '1rem',
        'spacing-md': '2rem',
        'spacing-lg': '4rem',
        'spacing-xl': '6rem',
      },
      borderRadius: {
        'border-radius': '8px',
      },
    },
  },
  plugins: [],
}
