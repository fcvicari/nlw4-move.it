import { Avatar, Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { GoArrowUp } from 'react-icons/go';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Flex>
      <Center>
        <Avatar
          name="Avatar Profile"
          src="https://github.com/fcvicari.png"
          w={['4rem', '5.5rem']}
          h={['4rem', '5.5rem']}
        />
        <Box marginLeft={['0.75rem', '1.5rem']}>
          <Text color="gray.800" as="strong">
            Fernando Cezar Vicari
          </Text>
          <Box display="flex" alignItems="center">
            <Icon
              name="Level"
              as={GoArrowUp}
              w={6}
              h={6}
              color="green.500"
              marginRight="0.5rem"
            />
            <Text as="p">Level {level}</Text>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}
