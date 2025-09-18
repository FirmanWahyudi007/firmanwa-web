import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

interface AvatarSidebarProps {
  shouldShowSkeleton?: boolean;
}
const AvatarSidebar = ({ shouldShowSkeleton = false }: AvatarSidebarProps) => {
  return (
    <SidebarHeader className='px-5 py-3 text-2xl font-bold bg-slate-100'>
      <SidebarMenu className='border-0'>
        <SidebarMenuItem>
          <SidebarMenuButton className='h-auto flex-col gap-3 rounded-lg px-0 py-2 hover:bg-gray-100'>
            {shouldShowSkeleton ? (
              <Skeleton className='h-20 w-20 rounded-full' />
            ) : (
              <>
                <Avatar className='h-20 w-20'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    className='rounded-lg'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </>
            )}
            <div className='text-center text-sm leading-tight'>
              {shouldShowSkeleton ? (
                <Skeleton className='h-4 w-20' />
              ) : (
                <span className='truncate font-bold'>Firman Wahyudi</span>
              )}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
};
export default AvatarSidebar;
