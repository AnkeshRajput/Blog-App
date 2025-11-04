module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hh-teal": "#33b8a4",
        "hh-orange": "#fd933a",
        "hh-gray": "#f6f6f6",
        "hh-dark": "#0f2421", // a deep teal blue for contrast
        "hh-muted": "#e1eef3",
        "hh-border": "#daf0eb",
        "hh-accent": "#e9f6f3"
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'hh-start': '#33b8a4',
        'hh-end': '#fd933a',
      }),
    },
    fontFamily: {
      sans: ["Geist", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
