// src/hooks/useLoading.ts
import { useEffect, useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false); // Start with false for SSR

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
};

export default useLoading;
