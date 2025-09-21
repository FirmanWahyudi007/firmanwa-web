// src/common/components/layouts/ClientWrapper.tsx
'use client';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { HeaderSidebar } from './header/HeaderSidebar';
import BottomNavigation from './footer/BottomNavigation';

interface ClientWrapperProps {
  children: ReactNode;
  initialOpen: boolean;
}

const ClientWrapper = ({ children, initialOpen }: ClientWrapperProps) => {
  return (
    <SidebarProvider defaultOpen={initialOpen}>
      <div className='hidden md:block'>
        <HeaderSidebar />
      </div>

      <main className='min-h-screen transition-all pb-16 lg:pb-0'>
        <div className='hidden md:block'>
          <SidebarTrigger />
        </div>
        {children}
      </main>

      <div className='block md:hidden'>
        <BottomNavigation />
      </div>
    </SidebarProvider>
  );
};

export default ClientWrapper;
