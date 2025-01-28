module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // Ensure this path points to your Tailwind configuration file
    }),
    require('autoprefixer'),
  ],
};