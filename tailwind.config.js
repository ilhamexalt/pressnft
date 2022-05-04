module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-left": "#5C80FF",
        "custom-right": "#1A52E4",
        "gray-custom": "#C4C4C4",
      },
    },
  },
  plugins: [],
};
