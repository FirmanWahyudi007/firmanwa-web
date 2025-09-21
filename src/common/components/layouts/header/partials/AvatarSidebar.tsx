import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import cn from '@/lib/cn';
import clsx from 'clsx';

interface AvatarSidebarProps {
  shouldShowSkeleton?: boolean;
}
const AvatarSidebar = ({ shouldShowSkeleton = false }: AvatarSidebarProps) => {
  return (
    <SidebarHeader className='px-5 py-3 text-2xl font-bold bg-slate-100'>
      <SidebarMenu className='border-0'>
        <SidebarMenuItem>
          <SidebarMenuButton className='h-auto flex-col gap-3 rounded-lg px-0 py-2 hover:bg-gray-100'>
            <div
              className={clsx(
                'overflow-hidden',
                shouldShowSkeleton ? 'animate-pulse' : ''
              )}
            >
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  src='/images/firmanwa.jpeg'
                  className={cn(
                    'duration-700 ease-in-out',
                    shouldShowSkeleton
                      ? 'scale-[1.02] blur-xl grayscale'
                      : 'scale-100 blur-0 grayscale-0',
                    'rounded-lg'
                  )}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className='text-center text-sm leading-tight'>
              {shouldShowSkeleton ? (
                <Skeleton className='h-4 w-30 bg-gray-400 animate-pulse' />
              ) : (
                <span className='truncate text-lg font-bold'>
                  Firman Wahyudi
                </span>
              )}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
export default AvatarSidebar;
