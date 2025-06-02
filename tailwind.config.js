/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'brand-light-red': 'hsl(0, 100%, 67%)',
        'brand-orange-yellow': 'hsl(39, 100%, 56%)',
        'brand-green-teal': 'hsl(166, 100%, 37%)',
        'brand-cobalt-blue': 'hsl(234, 85%, 45%)',
        'gradient-slate-blue': 'hsl(252, 100%, 67%)',
        'gradient-royal-blue': 'hsl(241, 81%, 54%)',
        'gradient-violet-blue': 'hsla(256, 72%, 46%, 1)',
        'brand-white': 'hsl(0, 0%, 100%)',
        'brand-pale-blue': 'hsl(221, 100%, 96%)',
        'brand-light-lavender': 'hsl(241, 100%, 89%)',
        'brand-dark-gray': 'hsl(224, 30%, 27%)',
      }
    },
  },
  plugins: [],
}

