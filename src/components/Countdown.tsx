import { Button, Center, Container, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(!active);
    if (active) {
      setTime(25 * 60);
    }
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <Grid>
      <Center>
        <Container
          variant="countdownContainer"
          margin="0"
          padding="0"
          flex="1"
          justifyContent="center"
          alignItems="center"
        >
          <Grid templateColumns="2.3fr 2.3fr 0.8fr 2.3fr 2.3fr">
            <Container variant="countdownNumber" marginRight="0.1rem">
              {minuteLeft}
            </Container>
            <Container variant="countdownNumber" marginLeft="0.1rem">
              {minuteRight}
            </Container>
            <Container variant="countdown">:</Container>
            <Container variant="countdownNumber" marginRight="0.1rem">
              {secondLeft}
            </Container>
            <Container variant="countdownNumber" marginLeft="0.1rem">
              {secondRight}
            </Container>
          </Grid>
        </Container>
      </Center>
      <Button
        onClick={startCountdown}
        marginTop="2rem"
        w="100%"
        h="5rem"
        variant={!active ? 'start' : 'stop'}
      >
        {!active ? 'Iniciar ciclo' : 'Abandonar ciclo'}
      </Button>
    </Grid>
  );
}
