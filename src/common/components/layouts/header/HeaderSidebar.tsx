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
import { useEffect, useState } from 'react';
import AvatarSidebar from './AvatarSidebar';
import { MENU_ITEMS } from '@/common/constant/menu';

export function HeaderSidebar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const menu = MENU_ITEMS;

  useEffect(() => {
    setIsMounted(true);
    // Simulasi loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 detik loading

    return () => clearTimeout(timer);
  }, []);

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
                          pathname === item.href
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
