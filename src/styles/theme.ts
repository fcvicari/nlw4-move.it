import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    green: {
      500: '#4CD62B',
    },
    blue: {
      300: '#5965E0',
      700: '#4953B8',
    },
    red: {
      500: '#E83F5B',
    },
    gray: {
      200: '#F2F3F5',
      400: '#DCDDE0',
      600: '#666666',
      800: '#2E384D',
    },
  },
  fonts: {
    body: 'Inter, Rajdhani, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Menlo, monospace',
  },
  components: {
    Button: {
      defaultProps: { variant: 'confirm' },
      variants: {
        confirm: {
          bg: 'green.500',
          w: '44',
          h: '14',
          color: 'white',
        },
        cancel: {
          bg: 'red.500',
          w: '44',
          h: '14',
          color: 'white',
        },
        start: {
          bg: 'blue.300',
          w: '96',
          h: '16',
          color: 'white',
          _hover: {
            bg: 'blue.700',
          },
        },
      },
    },
  },
});

export default customTheme;
