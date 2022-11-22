module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      integralCFBold: ["IntegralCFBold"],
      integralCFRegular: ["IntegralCFRegular"],
      dmSansBold: ["DMSansBold"],
      dmSansMedium: ["DMSansMedium"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        nfters: {
          primary: "#3D00B7",
          secondary: "#000",
          accent: "#2639ED",
          neutral: "#565656",
          "base-100": "#fff",
        },
      },
    ],
  },
}
