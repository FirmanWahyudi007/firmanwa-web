import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import AosProvider from '@/providers/AosProvider';
import ClientWrapper from './ClientWrapper';

interface LayoutProps {
  children: ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  const initialOpen = cookieStore.get('sidebar_state') ? defaultOpen : true;

  return (
    <div>
      <AosProvider />
      <ClientWrapper initialOpen={initialOpen}>{children}</ClientWrapper>
    </div>
  );
};

export default Layout;
