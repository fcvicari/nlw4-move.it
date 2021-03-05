import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Icon,
  Progress,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';

export function Countdown() {
  let countdownTimeout: NodeJS.Timeout;
  const maxTime = 0.1 * 60;

  const [time, setTime] = useState(maxTime);
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
      setTime(maxTime);
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
        <Container
          marginTop={['1rem', '2rem']}
          w="100%"
          h="5rem"
          variant="countdownFinish"
        >
          <Center>
            <Text>
              Ciclo encerrado
              <Icon
                name="Finish"
                as={FaCheckCircle}
                w={6}
                h={6}
                color="green.500"
                marginLeft="1rem"
              />
            </Text>
          </Center>
          <Progress
            size="xs"
            colorScheme="green"
            w="100%"
            value={100}
            position="relative"
            top="1rem"
          />
        </Container>
      ) : (
        <Container
          marginTop={['1rem', '2rem']}
          w="100%"
          h="5rem"
          variant="countdownButton"
        >
          <Button
            onClick={startCountdown}
            w="100%"
            h="5rem"
            variant={!isActive ? 'start' : 'stop'}
          >
            <Box w="100%">
              {!isActive ? (
                'Iniciar ciclo'
              ) : (
                <>
                  <Text>Ciclo encerrado</Text>
                  <Progress
                    size="xs"
                    colorScheme="green"
                    min={maxTime}
                    max={0}
                    value={time}
                    position="relative"
                    top="1.20rem"
                    hasStripe
                  />
                </>
              )}
            </Box>
          </Button>
        </Container>
      )}
    </Grid>
  );
}
