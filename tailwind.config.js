/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'digest-blue': '#459ad8'
      },
      fontFamily: {
        comic: ['Comic Neue', 'comic-neue-bold']
      },
      backgroundImage: {
        'bath': "url('https://i.pinimg.com/originals/48/5b/92/485b922ae32f7e364985282a42249188.gif')",
      },
    },
  },
  plugins: [],
}
