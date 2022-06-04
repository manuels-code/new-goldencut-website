module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "app-white": "#8c8c8c",
        "app-white2": "#f8f3f1",
        "app-black": "#111111",
        "app-brown": "#120f0f",
        overlay: "rgba(0, 0, 0, 0.54)",
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
