import { Center, Container, Flex, Text } from '@chakra-ui/react';

export function ExperienceBar() {
  return (
    <Flex as="header">
      <Center flex="1">
        <Text as="span">0 xp</Text>
        <Container as="div" variant="ExperienceXP">
          <Container as="div" variant="Experience" style={{ width: '50%' }} />
          <Text as="span" variant="CurrentExperience" style={{ left: '50%' }}>
            300 xp
          </Text>
        </Container>
        <Text as="span">600 xp</Text>
      </Center>
    </Flex>
  );
}
