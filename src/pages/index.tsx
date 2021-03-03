import { Box, Center, Container, Grid } from '@chakra-ui/react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

function Home() {
  return (
    <Container variant="content">
      <ExperienceBar />
      <Grid
        templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        gap="6.25rem"
        marginTop="8"
        alignItems="center"
        h="90vh"
      >
        <Box display="flex" flex="1" flexDir="column">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </Box>
        <Box display="flex" flex="1" flexDir="column" bg="red">
          <Profile />
        </Box>
      </Grid>
    </Container>
  );
}

export default Home;
