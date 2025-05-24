import { useEffect, useRef } from "react";

export const useInit = (cb, ...args) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      cb(...args);
    }
  }, [mounted.current, cb, args]);
};
