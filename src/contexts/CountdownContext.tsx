import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownProviderData {
  maxTime: number;
  time: number;
  isActive: boolean;
  hasFinish: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownProviderData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  let countdownTimeout: NodeJS.Timeout;
  const maxTime = 0.1 * 60;

  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(maxTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setTime(maxTime);
    setHasFinish(false);
    setIsActive(false);
  }

  function startCountdown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinish(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        maxTime,
        time,
        isActive,
        hasFinish,
        resetCountdown,
        startCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
