/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#122117',       // Cor de fundo
        secondary: '#38E07A',     // Botões
        auth: '#264533',          // Botão Auth
        input: '#1C3024',         // Inputs
        quaternary: '#96C4A8',    // Letras dos Inputs
        tertiary: '#366347',      // Borda dos Inputs
        quinternary: '#E5E8EB',   // Cor da Linha do Header
      }
    },
  },
  plugins: [],
}
