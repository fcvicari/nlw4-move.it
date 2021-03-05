import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function CompletedChallenges() {
  const { challengeComplete } = useContext(ChallengesContext);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="0.2rem solid #D7D8DA"
      margin={['1rem 0', '3.5rem 0']}
      paddingBottom={['0.5rem', '1rem']}
      fontWeight="500"
    >
      <Text as="span" fontSize={['0.85rem', '1.25rem']}>
        Desafios completos
      </Text>
      <Text as="span" fontSize={['0.95rem', '1.5rem']}>
        {challengeComplete}
      </Text>
    </Box>
  );
}
