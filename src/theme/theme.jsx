export const theme = {
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1280px' },
  space: [
    0, //0
    2, //1
    4, //2
    8, //3
    16, //4
    32, //5
    64, //6
  ],
  fonts: {
    primary: {
      regular: 'Circe-Regular', //400
      bold: 'Circe-Bold', //700
    },
    secondary: {
      regular: 'Poppins-Regular', //400
      bold: 'Poppins-Bold', //700
    },
  },
  fontSizes: [
    '12px', // 0
    '14px', // 1
    '16px', // 2
    '18px', // 3
    '20px', // 4
    '24px', // 5
    '30px', // 6
  ],
  colors: {
    bgc: '#E7EAF2',
    placeholderColor: '#BDBDBD',
    borderGrey: '#E0E0E0',
    grey: '#A6A6A6',
    violet: '#4A56E2',
    black: '#000000',
    white: '#FFFFFF',
    green: '#24CCA7',
    pink: '#FF6596',
    gradientBlue: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
  },
  boxShadows: {
    green: '0px 6px 15px rgba(36, 204, 167, 0.5);',
    pink: '0px 6px 15px rgba(255, 101, 150, 0.5)',
    violet: '0px 3px 10px rgba(74, 86, 226, 0.5)',
    grey: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  },
  transition: { main: 'cubic-bezier(0.4, 0, 0.2, 1)' },
};
