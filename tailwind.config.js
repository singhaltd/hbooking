module.exports = {
  purge: [
    './resources/views/**/*.edge',
    './resources/css/**/*.css',
    './resources/js/**/*.js',
    './resources/js/**/*.ts',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Lao_SomVang', 'Roboto'],
    },
    fontSize: {
      'base': '.7rem',
      'md': '.8rem'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "class",
  }
}
