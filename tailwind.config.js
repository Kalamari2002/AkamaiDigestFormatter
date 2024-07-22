/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'digest-blue': '#459ad8',
        'floral-green': '#5effba',
        'floral-pink' : '#ff819e',
        'vapor-pink'  : '#f191e9'
      },
      fontFamily: {
        comic: ['Comic Neue', 'comic-neue-bold']
      },
      backgroundImage: {
        'bath': "linear-gradient(rgba(250, 250, 250, 0.7), rgba(0, 255, 249, 0.8)), url('https://i.pinimg.com/originals/48/5b/92/485b922ae32f7e364985282a42249188.gif')",
      },
    },
  },
  plugins: [],
}
