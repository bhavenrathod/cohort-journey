import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; // exceutes after
  }, [value]);

  return ref.current; // executes first
};
// the reference returns first and updates the value after that
