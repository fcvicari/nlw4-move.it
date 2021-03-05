import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ChakraProvider>
  );
}

export default MyApp;
