import { useEffect, useRef, useState } from "react";

export const useDelayedState = <T,>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const setFastState = (value: T) => {
    setState(value);
    clearTimer();
  };

  const setDelayedState = (value: T, delay: number) => {
    timerRef.current = setTimeout(() => {
      setState(value);
    }, delay);
  };

  useEffect(() => {
    return () => {
      const time = timerRef.current;
      if (time) clearTimeout(time);
    };
  });

  return { state, setFastState, setDelayedState, clearTimer };
};
