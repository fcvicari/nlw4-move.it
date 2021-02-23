import { Button } from '@chakra-ui/react';
import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Move.IT</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Button>Teste</Button>
        <Button variant="cancel">Teste</Button>
        <Button variant="start">start</Button>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
