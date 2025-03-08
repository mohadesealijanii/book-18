import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "bold",
    },

    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "heavy",
    },

    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "fat",
    },
  ],
});

export const sans = localFont({
  src: [
    {
      path: "../../public/fonts/SansReg.otf",
      weight: "200",
      style: "normal",
    },

    {
      path: "../../public/fonts/SansBold.otf",
      weight: "400",
      style: "bold",
    },
  ],
});

export const oblong = localFont({
  src: [
    {
      path: "../../public/fonts/oblong.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const ibrand = localFont({
  src: [
    {
      path: "../../public/fonts/ibrand.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const inter = localFont({
  src: [
    // {
    //   path: "../../public/fonts/Inter.ttf",
    //   weight: "200",
    //   style: "normal",
    // },

    // {
    //   path: "../../public/fonts/Inter-Italic.ttf",
    //   weight: "300",
    //   style: "italic",
    // },

    // {
    //   path: "../../public/fonts/Inter-lightItalic.ttf",
    //   weight: "100",
    //   style: "normal",
    // },

    // {
    //   path: "../../public/fonts/Inter-mediumItalic.ttf",
    //   weight: "100",
    //   style: "mediumItalic",
    // },

    // {
    //   path: "../../public/fonts/Inter-medium.ttf",
    //   weight: "300",
    //   style: "medium",
    // },

    {
      path: "../../public/fonts/Inter-reg.ttf",
      weight: "200",
      style: "regular",
    },
  ],
});
