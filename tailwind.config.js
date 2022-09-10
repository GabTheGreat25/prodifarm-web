module.exports = {
  important: true,
  mode: "aot",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#39B54A",
          variant: "#108043",
          t2: "#4DC15F",
          t3: "#62CC74",
          t4: "#76D889",
          t5: "#8AE39E",
        },
        secondary: {
          DEFAULT: "#FBB040",
          variant: "#DAB038",
          t2: "#FBBA59",
          t3: "#FBC472",
          t4: "#FAD8A5",
          t5: "#FAE2BE",
        },
        neutral:{
          // pt - primary text ref:figma colors
          // st - secondary text ref: figma colors
          primary: "#212B36",
          secondary: "#5E738A",
          "800": "#333F4D",
          "700": "#425263",
          "600": "#516579",
          "500": "#5E738A",
          "300": "#8D9DAE",
          "200": "#ADB9C6",
          "100": "#CCD5DE",
          "50": "#F4F6F8",
        },
      },
      screens: {
        xxs: "320px",
        xs: "411px",
      },
      padding: {
        xxs: "calc(35rem * 0.1)",
        xs: "calc(35rem * 0.20)",
        sm: "calc(35rem * 0.35)",
        md: "calc(35rem * 0.5)",
        lg: "calc(35rem * 0.65)",
        xl: "calc(35rem * 0.80)",
        xxl: "35rem",
      },
      height: {
        min: "60rem !important",
        "min-1/4": "15rem !important",
        "min-1/3": "22rem !important",
        "min-1/2": "30rem !important",
        "min-sm": "48rem !important",
        "mob-sm": "65rem !important",
        "mob-md": "70rem !important",
      },
      backgroundSize: {
        30: "30%",
        40: "40%",
        50: "50%",
        75: "75%",
        100: "100%",
        "horizontal-50": "50% 100%",
        "vertical-50": "100% 50%",
        "vertical-75": "100% 75%",
      },
      minHeight: {
        card: "21rem",
        "card-sm": "10rem",
        "1/2": "50vh",
        "3/5": "70vh",
      },
      maxWidth: {
        card: "18rem",
        "card-sm": "16rem",
        "card-lg": "22rem",
        "card-xl": "35rem",
        "card-2xl": "45rem",
        fit: "fit-content",
      },
      gridTemplateColumns: {
        "card-fill": "repeat(auto-fill, minmax(18rem, 1fr))",
        "card-sm-fill": "repeat(auto-fill, minmax(16rem, 1fr))",
        "card-lg-fill": "repeat(auto-fill, minmax(22rem, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      color: ['checked']
    },
  },
  plugins: [],
};
