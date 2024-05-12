import React from "react";

function useDebounce<T>(
  initialValue: T,
  delay: number = 200
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(initialValue);
  const [debouncedValue, setDebouncedValue] = React.useState(initialValue);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, setValue];
}

export default useDebounce;
