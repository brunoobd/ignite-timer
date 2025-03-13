import { useEffect, useState } from "react";

import { CountdownContainer, CountdownNumber, CountdownSeparator } from "./style";

import { differenceInSeconds } from "date-fns";
import { useCycles } from "@hooks";

type Props = {
  onCompleteCountdown: VoidFunction;
};

export const Countdown = ({ onCompleteCountdown }: Props) => {
  const { cycleInProgress } = useCycles();
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const totalSeconds = cycleInProgress ? cycleInProgress.duration * 60 : 0;
  const remainingSeconds = cycleInProgress ? totalSeconds - elapsedSeconds : 0;

  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsInMinute = remainingSeconds % 60;

  const minutes = String(remainingMinutes).padStart(2, "0");
  const seconds = String(remainingSecondsInMinute).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (cycleInProgress) {
      interval = window.setInterval(() => {
        const newElapsedSeconds = differenceInSeconds(new Date(), cycleInProgress.startDate);

        if (newElapsedSeconds === totalSeconds) {
          onCompleteCountdown();
        } else {
          setElapsedSeconds(newElapsedSeconds);
        }
      }, 1000);
    }

    return () => {
      window.clearInterval(interval);
      setElapsedSeconds(0);
    };
  }, [cycleInProgress]);

  useEffect(() => {
    if (cycleInProgress) {
      document.title = `${minutes}:${seconds}`;
    }

    return () => {
      document.title = "Ignite Timer";
    };
  }, [cycleInProgress, minutes, seconds]);

  return (
    <CountdownContainer>
      <CountdownNumber>{minutes[0]}</CountdownNumber>
      <CountdownNumber>{minutes[1]}</CountdownNumber>

      <CountdownSeparator>:</CountdownSeparator>

      <CountdownNumber>{seconds[0]}</CountdownNumber>
      <CountdownNumber>{seconds[1]}</CountdownNumber>
    </CountdownContainer>
  );
};
