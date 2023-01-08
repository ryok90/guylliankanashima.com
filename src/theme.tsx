import { extendTheme } from '@chakra-ui/react';

const base = {
  colors: {
    custom: {
      background: '#121212',
      dark: '#1B1B1B',
      lightDark: '#424242',
      lighterDark: '#8B8B8B',
      light: '#CDCDCD',
      main: '#00D9C0',
    },
  },
};

export const theme = extendTheme(base);
