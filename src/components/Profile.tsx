import { Avatar, Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { GoArrowUp } from 'react-icons/go';

export function Profile() {
  return (
    <Flex>
      <Center>
        <Avatar
          name="Avatar Profile"
          src="https://github.com/fcvicari.png"
          w="5.5rem"
          h="5.5rem"
        />
        <Box marginLeft="1.5rem">
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
            <Text as="p">Level 1</Text>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
}