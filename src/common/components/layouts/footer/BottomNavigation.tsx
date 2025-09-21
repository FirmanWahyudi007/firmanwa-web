// src/common/components/layouts/footer/BottomNavigation.tsx
'use client';
import { MENU_ITEMS } from '@/common/constant/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const menu = MENU_ITEMS;
  const pathname = usePathname();

  return (
    <nav className='fixed p-5 bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around bg-background shadow-[0_-2px_4px_rgba(0,0,0,0.1)] md:h-16'>
      {menu.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`flex flex-col items-center justify-center gap-1 text-sm font-medium transition-colors p-2 ${
            pathname === item.href
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-primary'
          }`}
          prefetch={false}
        >
          <div className={pathname === item.href ? 'scale-110' : ''}>
            {item.icon}
          </div>
          <span className='text-xs'>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
