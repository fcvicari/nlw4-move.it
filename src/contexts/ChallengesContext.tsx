import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: 'arm' | 'body' | 'eye' | 'leg';
  description: string;
  amount: number;
}

interface ChallengesProviderData {
  level: number;
  currentExperience: number;
  challengeComplete: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  sucessChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesProviderData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeComplete, setChallengeComplete] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 6, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function sucessChallenge() {
    if (!activeChallenge) {
      return;
    }

    let finalExperienc = currentExperience + activeChallenge.amount;

    if (finalExperienc >= experienceToNextLevel) {
      setLevel(level + 1);
      finalExperienc -= experienceToNextLevel;
    }
    setCurrentExperience(finalExperienc);
    setChallengeComplete(challengeComplete + 1);
    setActiveChallenge(null);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challengeByIndex = challenges[randomChallengeIndex];

    setActiveChallenge(challengeByIndex);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('Novo desafio 🎉', {
        body: `Um novo desafio está disponível valendo ${challengeByIndex.amount} xp!`,
      });
    }
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengeComplete,
        activeChallenge,
        startNewChallenge,
        resetChallenge,
        sucessChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
