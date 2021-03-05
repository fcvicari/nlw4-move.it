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
  components: {
    Container: {
      variants: {
        content: {
          padding: ['0.5rem 1rem', '1.5rem 1rem'],
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
          margin: ['0 0.75rem', '0 1.5rem'],
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
          fontSize: ['2.5rem', '7rem'],
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
          flexDirection: 'column',
          border: '0',
          borderRadius: '5px',
          fontWeight: '600',
        },
        countdownButton: {
          flex: '1',
          border: '0',
          fontSize: '1.25rem',
          borderRadius: '5px',
          fontWeight: '600',
          padding: '0',
        },
        challengeContent: {
          bg: 'white',
          borderRadius: '5px',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
          padding: {
            base: '0.5rem 1rem',
            sm: '1.5rem 2rem',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        },
      },
    },
    Text: {
      variants: {
        Experience: {
          fontSize: ['0.7rem', '1rem'],
        },
        CurrentExperience: {
          fontSize: ['0.7rem', '1rem'],
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
          fontSize: ['2.0rem', '6.15rem'],
        },
        countdownRight: {
          flex: '1',
          borderRight: '1px solid #F2F3F5',
        },
        countdownLeft: {
          flex: '1',
          borderLeft: '1px solid #F2F3F5',
        },
        challengeTitle: {
          textAlign: 'center',
          fontSize: {
            base: '1.5rem',
            sm: '2rem',
          },
          fontWeight: '600',
          lineHeight: {
            base: '1.5rem',
            sm: '2.5rem',
          },
          padding: {
            base: '0.75rem',
            sm: '2rem',
          },
        },
        challengeText: {
          textAlign: 'center',
          fontSize: {
            base: '0.75rem',
            sm: '1rem',
          },
          fontWeight: '400',
          lineHeight: {
            base: '1rem',
            sm: '1.5rem',
          },
          padding: {
            base: '0.2rem',
            sm: '1rem',
          },
        },
      },
    },
    Button: {
      defaultProps: { variant: 'start' },
      variants: {
        start: {
          fontSize: '1.25rem',
          fontWeight: '600',
          bg: 'blue.300',
          color: 'white',
          _hover: {
            bg: 'blue.700',
          },
        },
        stop: {
          fontSize: '1.25rem',
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
