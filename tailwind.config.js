/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ChildBgColor: '#1C1C1E',
        BodyBgColor: '#111013',
        BlueColor: '#111013',
        PurpleColor: '#B5A1E0',
        MustardColor: '#B5A1E0',
        GrayishColor: '#80888B',
      },
      borderRadius: {
        'main-BR': '50px',      
      },
      boxShadow: {
        'main-BS': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
      },
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
