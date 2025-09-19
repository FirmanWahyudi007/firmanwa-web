/**
 * v0 by Vercel.
 * @see https://v0.app/t/mGVggH0RgOv
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
import { MENU_ITEMS } from '@/common/constant/menu';
import Link from 'next/link';

export default function BottomNavigation() {
  const menu = MENU_ITEMS;

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 flex h-14 w-full items-center justify-around bg-background shadow-[0_-2px_4px_rgba(0,0,0,0.1)] md:h-16'>
      {menu.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className='flex flex-col items-center justify-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary focus:text-primary'
          prefetch={false}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
