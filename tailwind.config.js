/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        red:       '#9b0000',
        'red-dark':'#6b0000',
        orange:    '#f89d01',
        yellow:    '#f8e23b',
        dark:      '#303030',
        light:     '#f7f4f0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 4px 16px rgba(0,0,0,0.08)',
        md: '0 8px 30px rgba(0,0,0,0.13)',
        lg: '0 16px 48px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}
