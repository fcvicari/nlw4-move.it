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
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          flex: '1',
        },
        countdownNumber: {
          flex: '1',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: ['5.5rem', '7rem'],
          bgColor: 'white',
          borderRadius: '5px',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
        },
        countdownFinish: {
          flex: '1',
          bg: 'white',
          color: 'gray.800',
          fontSize: '1.25rem',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          border: '0',
          borderRadius: '5px',
          fontWeight: '600',
          borderBottom: '0.3rem solid #4CD62B',
        },
        countdownButton: {
          flex: '1',
          border: '0',
          fontSize: '1.25rem',
          borderRadius: '5px',
          fontWeight: '600',
          padding: '0',
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
        countdown: {
          margin: '0 0.5rem',
          padding: '0',
          alignItens: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: '6.15rem',
        },
        countdownRight: {
          flex: '1',
          borderRight: '1px solid #F2F3F5',
        },
        countdownLeft: {
          flex: '1',
          borderLeft: '1px solid #F2F3F5',
        },
      },
    },
    Button: {
      defaultProps: { variant: 'start' },
      variants: {
        start: {
          bg: 'blue.300',
          fontSize: '1.25rem',
          border: '0',
          fontWeight: '600',
          color: 'white',
          _hover: {
            bg: 'blue.700',
          },
        },
        stop: {
          fontSize: '1.25rem',
          border: '0',
          w: '100%',
          padding: '0',
          margin: '0',
          fontWeight: '600',
          bg: 'white',
          color: 'gray.800',
          _hover: {
            bg: 'red.500',
          },
        },
      },
    },
  },
});

export default customTheme;
