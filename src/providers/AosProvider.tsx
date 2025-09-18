'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useLoading from '@/hooks/useLoading';
import useHasMounted from '@/hooks/useHasMounted';

export default function AosProvider() {
  const isLoading = useLoading();
  const isHasMounted = useHasMounted();

  const shouldInitAOS = isHasMounted && isLoading;
  useEffect(() => {
    if (shouldInitAOS) {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
    }
  }, [shouldInitAOS]);

  return null;
}
