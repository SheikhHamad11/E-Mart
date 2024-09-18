module.exports = {
  darkMode: 'class',
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['PlayfairDisplay-Black', 'serif'],
        playfair_b: ['PlayfairDisplay-Bold', 'serif'],
        playfair_r: ['PlayfairDisplay-Regular', 'serif'],
        playfair_m: ['PlayfairDisplay-Medium', 'serif'],
        sevillana: ['Sevillana-Regular', 'serif'], // Add PlayfairDisplay-Bold font
      },
    },
  },
  plugins: [],
};
