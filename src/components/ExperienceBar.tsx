import { Center, Container, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Flex as="header">
      <Center flex="1">
        <Text as="span" variant="Experience">
          0 xp
        </Text>
        <Container as="div" variant="ExperienceXP">
          <Container
            as="div"
            variant="Experience"
            style={{ width: `${percentToNextLevel}%` }}
          />
          <Text
            as="span"
            variant="CurrentExperience"
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </Text>
        </Container>
        <Text as="span" variant="Experience">
          {experienceToNextLevel} xp
        </Text>
      </Center>
    </Flex>
  );
}
