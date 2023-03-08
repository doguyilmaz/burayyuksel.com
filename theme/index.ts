import { extendTheme } from '@chakra-ui/react';

// 📁 theme
//   📄 index.js  # my main theme entrypoint
//   📄 styles.js  # all my global style overrides
//   📁 foundations
//     📄 borders.js  # all my border overrides
//   📁 components
//     📄 button.js  # all my button overrides

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'by',
};

export const colors = {
  light: {
    primary: '#F5F5F5', // lightGray.100
    secondary: '#FFFFFF', // white
    color: '#B1B1B1', // gray.100
    secondary_color: '#E5E9EA', // lightGray.900
  },
  dark: {
    primary: '#1C1C1E', // solarized
    secondary: '#272729', // card_solarized
    color: '#515253', // gray.900
    secondary_color: '#F1F1F1', // lightGray.500
  },
  red: {
    50: 'rgba(220, 53, 69, .2)',
    100: '#E55F6C',
    500: '#DC3545',
    900: '#C90013',
    // d100: '#E55F6C',
    // d500: '#DC3545',
    // d900: '#C90013',
  },
  dark_red: {
    100: '#E55F6C',
    500: '#DC3545',
    900: '#C90013',
  },
  iris: {
    50: 'rgba(93, 95, 239, .2)',
    100: '#A5A6F6',
    500: '#7879F1',
    900: '#5D5FEF',
  },
  black: {
    100: '#3E3E3E',
    500: '#282828',
    900: '#000000',
  },
  gray: {
    50: 'rgba(177, 177, 177, .2)',
    100: '#B1B1B1',
    500: '#7E7E7E',
    900: '#515253',
  },
  lightGray: {
    100: '#F5F5F5',
    500: '#F1F1F1',
    900: '#E5E9EA',
  },
  coral: {
    50: '#E6CBCB',
    // 50: 'rgba(74, 47, 48, .2)',
    100: '#EA8D8D',
    500: '#EC6666',
    900: '#DE4343',
  },
  darkOrange: {
    100: '#F48946',
    500: '#F5650B',
    900: '#E25700',
  },
  orange: {
    50: 'rgba(255, 156, 43, .2)',
    100: '#FFAE51',
    500: '#FF9C2B',
    900: '#FF8900',
  },
  yellow: {
    100: '#FFF686',
    500: '#FBFF45',
    900: '#FAFF00',
  },
  blue: {
    50: 'rgba(53, 148, 255, .23)',
    100: '#8EC3FF',
    500: '#3594FF',
    900: '#077AFB',
  },
  purple: {
    100: '#B35EBE',
    500: '#B228C4',
    900: '#9000A3',
  },
  darkPurple: {
    50: 'rgba(73, 41, 112, .2)',
    100: '#A183C5',
    500: '#7249A4',
    900: '#492970',
  },
  fuschia: {
    50: 'rgba(241, 120, 182, .2)',
    100: '#FCDDEC',
    500: '#F178B6',
    900: '#EF5DA8',
  },
  turquoise: {
    50: 'rgba(1, 186, 202, .2)',
    100: '#6BE7F1',
    500: '#43D2DE',
    900: '#01BACA',
  },
  softGreen: {
    50: 'rgba(36, 162, 130, .23)',
    100: '#92E9D3',
    500: '#37BC9B',
    900: '#24A182',
  },
  green: {
    50: 'rgba(177, 218, 88, .2)',
    100: '#D8EDAA',
    500: '#B1DA58',
    900: '#8BBC21',
  },
  darkBrown: {
    50: 'rgba(125, 13, 13, .2)',
    100: '#A45555',
    500: '#7D0D0D',
    900: '#630505',
  },
};

// TODO: edit and ask fallback fonts
const fonts = {
  body: `Poppins, system-ui, sans-serif`,
  heading: `Poppins, Georgia, serif`,
  mono: `Poppins, Menlo, monospace`,
};

const fontSizes = {
  xs: '0.75rem', // 12px - Body 3
  sm: '0.875rem', // 14px - Body 1, 2, 3 | Menu 1, 2
  md: '1rem', // 16px - Header 3
  lg: '1.125rem', // 18px - Header 2
  xl: '1.313rem', // 21px - Header 1
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  base: 1.5,
  shorter: '1.125rem', // 18px - Body 3
  short: '1.313rem', // 21px - Body 1, 2 | Menu 1, 2, 3
  tall: '1.5rem', // 24px - Header 3
  taller: '1.688rem', // 27px - Header 1, 2
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const theme = extendTheme({
  config,
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  colors,
  fonts,
  fontSizes,
  lineHeights,
  letterSpacings,
});
