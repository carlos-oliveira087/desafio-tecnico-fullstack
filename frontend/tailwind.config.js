/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#122117',       // cor de fundo
        secondary: '#38E07A',     // botoes
        auth: '#264533',          // botao auth
        input: '#1C3024',         // inputs
        quaternary: '#96C4A8',    // letras inputs
        tertiary: '#366347',      // borda inputs
        quinternary: '#E5E8EB',   // cor linha header
      }
    },
  },
  plugins: [],
}
