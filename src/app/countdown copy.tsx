// components/CountdownTimer.tsx
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const addLeadingZero = (value: number) => (value < 10 ? `0${value}` : value);
  console.log(timeLeft);
  return (
    <div>
      {timeLeft.days && <div>{`${timeLeft.days}d`}</div>}
      <div>{`${addLeadingZero(timeLeft.hours || 0)}:${addLeadingZero(
        timeLeft.minutes || 0
      )}:${addLeadingZero(timeLeft.seconds || 0)}`}</div>
    </div>
  );
};

export default CountdownTimer;
