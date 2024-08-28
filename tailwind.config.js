/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      "Barlow-Semi": ["Barlow Semi", "sans-serif"],
      "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
    },
    colors: {
      "cyan-600": "hsl(192, 37%, 48%)",
      "cyan-300": "hsl(192, 90%, 77%)",
      "purple-600": "hsl(268, 34%, 53%)",
      "purple-300": "hsl(268, 100%, 86%)",
      "slate-900": "hsl(240, 21%, 20%)",
      "slate-600": "hsl(240, 10%, 57%)",
      "slate-300": "hsl(240, 18%, 85%)",
      "white": "hsl(0, 0%, 98%)",
    },
    backgroundImage: {
      "bgfooter": "url(/assets/tablet/image-footer.jpg)",
      "bgDesktop": "url(/assets/desktop/image-footer.jpg)",
    },
    screens: {
      "tablet": '768px',
      // => @media (min-width: 640px) { ... }
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... 
    },
    container: {
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... 
      },
    },
    extend: {},
  },
  plugins: [],
};
