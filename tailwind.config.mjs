

export default {
  content: ["./public/index.html", "./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        light: "var(--color-light)",
        sea: "var(--color-sea)",
        ocean: "var(--color-ocean)",
        sun: "var(--color-sun)",
        orange: "var(--color-orange)",
        gray: "var(--color-gray)",
        grey: "var(--color-grey)",
      },
      fontFamily: {
        oblong: ["ibrand", "sans"], // ⚠️ This might override ibrand
      },


    },
  },
  plugins: [],
};

