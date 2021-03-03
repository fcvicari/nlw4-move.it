import { Box, Text } from '@chakra-ui/react';

export function CompletedChallenges() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="0.2rem solid #D7D8DA"
      margin={['1rem 0', '3.5rem 0']}
      paddingBottom="1rem"
      fontWeight="500"
    >
      <Text as="span" fontSize="1.25rem">
        Desafios completos
      </Text>
      <Text as="span" fontSize="1.5rem">
        5
      </Text>
    </Box>
  );
}
