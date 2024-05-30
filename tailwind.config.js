/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '24px'],
      xl: ['22px', '30px'],
      '2xl': ['20px', '28px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '44px'],
    },
    screens: {
      'laptop': '850px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}