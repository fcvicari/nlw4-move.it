import { Button, Container, Grid, Text } from '@chakra-ui/react';
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
      <Container
        variant="countdownContainer"
        margin="0"
        padding="0"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <Container variant="countdownNumber">
          <Text as="span" variant="countdownRight">
            {minuteLeft}
          </Text>
          <Text as="span" variant="countdownLeft">
            {minuteRight}
          </Text>
        </Container>
        <Text as="span" variant="countdown">
          :
        </Text>
        <Container variant="countdownNumber">
          <Text as="span" variant="countdownRight">
            {secondLeft}
          </Text>
          <Text as="span" variant="countdownLeft">
            {secondRight}
          </Text>
        </Container>
      </Container>
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
