/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      PTRootUI: ['PTRootUI-Bold', 'PTRootUI-Light', 'PTRootUI-Medium', 'PTRootUI-Regular'],
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'Yankees-Blue': '#1F293D',
      'Dark-Gunmetal': '#1A2232',
      'Orange': '#FF8036',
      'Cornflower-Blue': '#6D9EFF',
      'Dark-Blue-Gray': '#637394',
      'Space-Cadet': '#253554',
    },
    extend: {
      spacing: {
        '0.0625rem': '1px',
        '0.125rem': '2px',
        '0.25rem': '4px',
        '0.5rem': '8px',
        '0.75rem': '12px',
        '1rem': '16px',
        '1.5rem': '24px',
        '2rem': '32px',
        '2.5rem': '40px',
        '3rem': '48px',
        '3.5rem': '56px',
        '4rem': '64px',
        '5rem': '80px',
        '5.375rem': '86px',
        '6.5rem': '104px',
        '7rem': '112px',
        '8rem': '128px',
        '10rem': '160px',
        '12rem': '192px',
        '14rem': '224px',
        '15rem': '240px',
        '18.5rem': '296px',
      }
    },
  },
  plugins: [],
}

