// src/common/components/layouts/ClientWrapper.tsx
'use client';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactNode, useState, useEffect } from 'react';
import { HeaderSidebar } from './header/HeaderSidebar';
import { useIsMobile } from '@/hooks/useMobile';
import BottomNavigation from './footer/BottomNavigation';

interface ClientWrapperProps {
  children: ReactNode;
  initialOpen: boolean;
}

const ClientWrapper = ({ children, initialOpen }: ClientWrapperProps) => {
  const isMobile = useIsMobile();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Render the same structure on server and client initially
  // Only show responsive behavior after hydration
  const shouldShow = isHydrated ? !isMobile : true;

  return (
    <SidebarProvider defaultOpen={initialOpen}>
      {shouldShow && <HeaderSidebar />}
      <main className='min-h-screen transition-all'>
        {shouldShow && <SidebarTrigger />}
        {children}
      </main>
      {!shouldShow && <BottomNavigation />}
    </SidebarProvider>
  );
};

export default ClientWrapper;
