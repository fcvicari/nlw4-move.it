import { extendTheme, theme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        background: 'gray.200',
        height: '100vh',
        width: '100vw',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
  colors: {
    ...theme.colors,
    green: {
      500: '#4CD62B',
    },
    blue: {
      300: '#5965E0',
      700: '#4953B8',
    },
    red: {
      500: '#E83F5B',
      700: '#C9233E',
    },
    gray: {
      200: '#F2F3F5',
      400: '#DCDDE0',
      600: '#666666',
      800: '#2E384D',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  components: {
    Container: {
      variants: {
        content: {
          padding: '1.5rem 1rem',
          maxWidth: '992px',
          margin: '0 auto',
          height: '100vh',
        },
        ExperienceXP: {
          flex: '1',
          backgroundColor: 'gray.400',
          height: '4px',
          padding: '0',
          position: 'relative',
          borderRadius: '4px',
          maxWidth: '100%',
          margin: '0 1.5rem',
        },
        Experience: {
          flex: '1',
          backgroundColor: 'green.500',
          height: '4px',
          padding: '0',
          margin: '0',
          position: 'absolute',
          borderRadius: '4px',
        },
        countdownContainer: {
          display: 'flex',
          fontFamily: 'Rajdhani',
          fontWeight: '500',
          color: 'gray.800',
          alignItens: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          flex: '1',
        },
        countdownNumber: {
          display: 'flex',
          textAlign: 'center',
          fontSize: ['5.5rem', '8.5rem'],
          bgColor: 'white',
          justifyContent: 'center',
          borderRadius: '5px',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
        },
        countdown: {
          margin: '0',
          padding: '0',
          alignItens: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: ['5.0rem', '7.75rem'],
        },
      },
    },
    Text: {
      variants: {
        CurrentExperience: {
          position: 'absolute',
          top: '1',
          transform: 'translateX(-50%)',
        },
      },
    },
    Button: {
      defaultProps: { variant: 'start' },
      variants: {
        start: {
          bg: 'blue.300',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: '600',
          border: '0',
          _hover: {
            bg: 'blue.700',
          },
        },
        stop: {
          bg: 'red.500',
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: '600',
          border: '0',
          _hover: {
            bg: 'red.700',
          },
        },
      },
    },
  },
});

export default customTheme;
