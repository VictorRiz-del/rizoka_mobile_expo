/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",'./components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainColor: "#D72428",
        red: '#9A1725',
        primaryfade: '#C7B7D8',
        white: "#FFFFFF",
        primaryBlack: "black",
        lightBlack: "#5D6676",
        googleColor: "#3F525B",
        blue: "#0974AF",
        secondaryBlack: "#344054",
        bgColor: "#FFFFFF",
        grey: "#667085",
        lightRed: "#AE4551",
        black: "#101828",
        lightPink: "#FDF3F3",
        darkBtn: "#212121",
        input: "#F1F1F1",
        lightOrange: "#A28300",
        mainBlack: "#333333",
        lightYellow: "#A28300",
        background: "#F9FAFB",
        lightGrey: '#BDBDBD',
        orange:"#E78382",
        pink:"#F77275",
        dark:{

        }
      },
    },
  },
  plugins: [],
};