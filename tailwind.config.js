module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "app-white": "#8c8c8c",
        'app-black': '#111111',
        overlay: "rgba(0, 0, 0, 0.54)",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
