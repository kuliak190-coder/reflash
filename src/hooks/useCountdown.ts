import { useEffect, useState } from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  isOver: boolean;
};

function diff(target: number): TimeLeft {
  const distance = target - Date.now();
  if (distance <= 0) {
    return { days: 0, hours: 0, mins: 0, secs: 0, isOver: true };
  }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((distance % (1000 * 60)) / 1000),
    isOver: false,
  };
}

/**
 * Live countdown to the event (14 June 12:00, current year).
 * Ported from the prototype's timer logic.
 */
export default function useCountdown(): TimeLeft {
  const target = new Date(
    `June 14, ${new Date().getFullYear()} 12:00:00`,
  ).getTime();

  const [time, setTime] = useState<TimeLeft>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => {
      const next = diff(target);
      setTime(next);
      if (next.isOver) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}
