import { MenuItemProps, SocialMediaItemProps } from '@/common/types/menu';
import {
  FiHome as HomeIcon,
  FiGitBranch as ProjectIcon,
  FiUser as User,
  FiMail as Contact,
  FiGithub as Github,
  FiLinkedin as Linkedin,
  FiInstagram as Instagram,
} from 'react-icons/fi';

import { BsEnvelopeAtFill } from 'react-icons/bs';

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

export const SOCIAL_MEDIA_ITEMS: SocialMediaItemProps[] = [
  {
    name: 'Email',
    href: 'mailto:firmanwhyd007@gmail.com',
    icon: <BsEnvelopeAtFill size={iconSize} />,
    className: '!bg-teal-500 border',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/FirmanWahyudi007',
    icon: <Github size={iconSize} />,
    className: '!bg-gray-800 border',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/firman-wahyudi/',
    icon: <Linkedin size={iconSize} />,
    className: '!bg-blue-700 border',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/firmanwa_',
    icon: <Instagram size={iconSize} />,
    className: '!bg-pink-500 border',
  },
];
