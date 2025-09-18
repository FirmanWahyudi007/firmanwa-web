import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { HeaderSidebar } from './header/HeaderSidebar';
import { cookies } from 'next/headers';
import AosProvider from '@/providers/AosProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <>
      <div>
        <AosProvider />
        <SidebarProvider defaultOpen={defaultOpen}>
          <HeaderSidebar />
          <main className={clsx('min-h-screen', 'transition-all')}>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </>
  );
};

export default Layout;
