import plugin from 'tailwindcss/plugin';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      zIndex: {
        modal: '50',
        nav: '40',
        sticky: '20',
        main: '0',
      },
      animation: {
        fadeUp: 'fadeUp 1.5s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }): void {
      addBase({
        h1: { fontSize: theme('fontSize.3xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.xl') },
      });
    }),
  ],
};
