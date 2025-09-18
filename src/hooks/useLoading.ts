import { useEffect, useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);
  return isLoading;
};

export default useLoading;
