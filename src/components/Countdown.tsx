import { Button, Center, Container, Grid, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';

export function Countdown() {
  let countdownTimeout: NodeJS.Timeout;

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(!isActive);
    if (isActive) {
      clearTimeout(countdownTimeout);
      setTime(0.05 * 60);
    }
  }

  useEffect(() => {
    if (hasFinish) {
      console.log('finalizou');
    }
  }, [hasFinish]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinish(true);
    }
  }, [isActive, time]);

  return (
    <Grid>
      <Container variant="countdownContainer" margin="0" padding="0" flex="1">
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
      {hasFinish ? (
        <Container marginTop="2rem" w="100%" h="5rem" variant="countdownFinish">
          <Center>
            Ciclo encerrado
            <Icon
              name="Finish"
              as={FaCheckCircle}
              w={6}
              h={6}
              color="green.500"
              marginLeft="1rem"
            />
          </Center>
        </Container>
      ) : (
        <Container marginTop="2rem" w="100%" h="5rem" variant="countdownButton">
          <Button
            onClick={startCountdown}
            w="100%"
            h="5rem"
            variant={!isActive ? 'start' : 'stop'}
          >
            {!isActive ? 'Iniciar ciclo' : 'Abandonar ciclo'}
          </Button>
        </Container>
      )}
    </Grid>
  );
}
