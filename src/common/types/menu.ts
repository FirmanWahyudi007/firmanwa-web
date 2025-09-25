import { JSX } from 'react';

export interface MenuItemProps {
  title: string;
  href: string;
  icon: JSX.Element;
}

export interface SocialMediaItemProps {
  name: string;
  href: string;
  icon: JSX.Element;
  className?: string;
}
