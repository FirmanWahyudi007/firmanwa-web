// hooks/useMobile.ts
import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint: number = 1024) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set hydrated to true after first render
    setIsHydrated(true);

    // Initial check
    checkIsMobile();

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  // Return false during SSR and before hydration to prevent mismatch
  return isHydrated ? isMobile : false;
};
