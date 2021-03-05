import { Box, Button, Container, Grid, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, sucessChallenge } = useContext(
    ChallengesContext,
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengSucceded() {
    resetCountdown();
    sucessChallenge();
  }

  function handleChallengFailed() {
    resetCountdown();
    resetChallenge();
  }

  return (
    <Grid>
      {activeChallenge ? (
        <Container variant="challengeContent">
          <Container as="header" variant="challengeXP">
            Ganhe {activeChallenge.amount} xp
          </Container>

          <Container as="main" variant="challenge">
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Level"
              width="140px"
              height="112px"
            />
            <Text variant="challengeTitle">Exercite-se</Text>

            <Text variant="challengeText">{activeChallenge.description}</Text>
          </Container>

          <Grid
            as="footer"
            borderRadius="5px"
            templateColumns="1fr 1fr"
            w="100%"
            gap="0rem"
            borderColor="10px solid #666666"
          >
            <Button
              onClick={handleChallengFailed}
              variant="failed"
              borderBottomLeftRadius="5px"
            >
              Falhei
            </Button>
            <Button
              onClick={handleChallengSucceded}
              variant="complete"
              borderBottomRightRadius="5px"
            >
              Completei
            </Button>
          </Grid>
        </Container>
      ) : (
        <Container variant="challengeContent">
          <Text variant="challengeTitle">
            Finalize um ciclo para receber desafios
          </Text>
          <Box display="flex" padding="2rem">
            <img
              src="icons/level-up.svg"
              alt="level"
              width="32px"
              height="43px"
            />
            <Text variant="challengeText">
              Complete-os e ganhe experiência e avance de level.
            </Text>
          </Box>
        </Container>
      )}
    </Grid>
  );
}
