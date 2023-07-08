/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#FFECE3',
        promCat1: '#D6D6D8',
        promCat2: '#EFE1C7',
        promCat3: '#D7D7D9',
        promCat4: '#212121',
        promText: '#474747',
      },
    },
  },
  plugins: [],
};
