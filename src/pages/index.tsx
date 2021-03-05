import { Box, Container, Grid } from '@chakra-ui/react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

function Home() {
  return (
    <Container variant="content">
      <ExperienceBar />
      <Grid flex="1" h="90vh" alignItems="center">
        <Box>
          <Grid
            templateColumns={['1fr', '1fr 1fr']}
            gap={['2.25rem', '6.25rem']}
            marginTop="8"
            flex="1"
          >
            <Box display="flex" flex="1" flexDir="column">
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </Box>
            <Box h="100%" display="flex" flex="1" flexDir="row">
              <ChallengeBox />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default Home;
