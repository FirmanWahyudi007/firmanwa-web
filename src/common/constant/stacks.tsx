import { JSX } from 'react';
import {
  SiBootstrap,
  SiExpress,
  SiGo,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  NestJS: <SiNestjs size={iconSize} className='text-red-600' />,
  Express: <SiExpress size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  Golang: <SiGo size={iconSize} className='text-blue-400' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  PostgreSQL: <SiPostgresql size={iconSize} className='text-cyan-800' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-600' />,
  Supabase: <SiSupabase size={iconSize} className='text-emerald-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: <SiBootstrap size={iconSize} className='text-purple-500' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Jquery: <SiJquery size={iconSize} />,
};
