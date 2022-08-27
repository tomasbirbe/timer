/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient: `background-image: linear-gradient(
          180deg,
          hsl(240deg 78% 38%) 0%,
          hsl(249deg 74% 41%) 10%,
          hsl(255deg 69% 44%) 20%,
          hsl(259deg 65% 47%) 30%,
          hsl(262deg 61% 50%) 40%,
          hsl(265deg 65% 53%) 50%,
          hsl(272deg 64% 52%) 60%,
          hsl(279deg 63% 51%) 70%,
          hsl(285deg 64% 49%) 80%,
          hsl(291deg 66% 48%) 90%,
          hsl(297deg 69% 46%) 100%
        );`,
      },
    },
  },
  plugins: [],
};
