// src/providers/AosProvider.tsx
'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useLoading from '@/hooks/useLoading';

export default function AosProvider() {
  const isLoading = useLoading();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading) {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
    }
  }, [isLoading, mounted]);

  return null;
}
