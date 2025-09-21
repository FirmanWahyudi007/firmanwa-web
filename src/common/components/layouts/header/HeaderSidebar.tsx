// src/common/components/layouts/header/HeaderSidebar.tsx
'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AvatarSidebar from './partials/AvatarSidebar';
import { MENU_ITEMS } from '@/common/constant/menu';
import { useEffect, useState } from 'react';

export function HeaderSidebar() {
  const pathname = usePathname();
  const menu = MENU_ITEMS;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sidebar className='lg:w-60'>
      <AvatarSidebar />
      <SidebarContent className='bg-white pt-5'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className='my-2 px-10'>
                    <Link
                      href={item.href}
                      aria-label={item.title}
                      className={`flex items-center font-light gap-3 transition-colors ${
                        mounted && pathname === item.href
                          ? 'text-black bg-neutral-200 hover:bg-neutral-400'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.icon}
                      <span className='text-2xl tracking-widest'>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}