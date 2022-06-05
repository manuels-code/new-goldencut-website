module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "app-white": "#fffcf0",
        "app-white2": "#f8f3f1",
        "app-black": "#111111",
        "app-brown": "#120f0f",
        "app-gold": "#ffd700",
        overlay: "rgba(0, 0, 0, 0.54)",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
