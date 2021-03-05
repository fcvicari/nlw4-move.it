import { Box, Container, Grid, Text } from '@chakra-ui/react';

export function ChallengeBox() {
  return (
    <Grid>
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
    </Grid>
  );
}
