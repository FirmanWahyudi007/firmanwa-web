import { MenuItemProps } from '@/common/types/menu';
import {
  FiHome as HomeIcon,
  FiGitBranch as ProjectIcon,
  FiUser as User,
  FiMail as Contact,
} from 'react-icons/fi';

const iconSize = 20;
export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
  },
  {
    title: 'About',
    href: '/about',
    icon: <User size={iconSize} />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <Contact size={iconSize} />,
  },
];
