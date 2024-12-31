import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      josefin: 'Josefin Sans',
      jomolhari: 'Jomolhari',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'custom-black': '#1F1F1F',
        'custom-salmon': '#EC6256',
        'custom-gray': '#DFDFDF',
        'custom-bg': '#EDEDED',
      },
    },
  },
  plugins: [],
} satisfies Config;
