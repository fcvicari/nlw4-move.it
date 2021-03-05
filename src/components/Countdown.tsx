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
import { useContext } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {
  const {
    maxTime,
    time,
    isActive,
    hasFinish,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Grid>
      <Container
        variant="countdownContainer"
        margin="0"
        padding={['0 4rem', '0']}
        flex="1"
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
            onClick={isActive ? resetCountdown : startCountdown}
            w="100%"
            h="5rem"
            variant={!isActive ? 'start' : 'stop'}
          >
            <Box w="100%">
              {!isActive ? (
                'Iniciar ciclo'
              ) : (
                <>
                  <Text>Abandonar ciclo</Text>
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
