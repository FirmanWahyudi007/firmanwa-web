'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AvatarSidebar from './partials/AvatarSidebar';
import { MENU_ITEMS } from '@/common/constant/menu';
import useLoading from '@/hooks/useLoading';
import useHasMounted from '@/hooks/useHasMounted';

export function HeaderSidebar() {
  const pathname = usePathname();
  const menu = MENU_ITEMS;
  const isLoading = useLoading();
  const isMounted = useHasMounted();

  // Prevent hydration mismatch - always render same structure
  const shouldShowSkeleton = isMounted && isLoading;
  return (
    <Sidebar className='lg:w-60'>
      <AvatarSidebar shouldShowSkeleton={shouldShowSkeleton} />
      <SidebarContent className='bg-white pt-5'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {shouldShowSkeleton ? (
                    <SidebarMenuSkeleton showIcon />
                  ) : (
                    <SidebarMenuButton asChild className='my-2 px-10'>
                      <Link
                        href={item.href}
                        aria-label={item.title}
                        className={`flex items-center font-light gap-3 ${
                          shouldShowSkeleton && pathname === item.href
                            ? 'text-black  bg-neutral-200 hover:bg-neutral-400'
                            : 'text-gray-600  hover:text-gray-900'
                        }`}
                      >
                        {item.icon}
                        <span className='text-2xl tracking-widest'>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
