// src/modules/contact/components/SocialMedia.tsx
import { SOCIAL_MEDIA_ITEMS } from '@/common/constant/menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import SectionHeading from '@/common/components/elements/SectionHeading';

const SocialMedia = () => {
  return (
    <div className='space-y-8'>
      <div className='space-y-3'>
        <SectionHeading title='Connect with Me on Social Media' />
      </div>

      <div className='flex flex-wrap justify-start gap-6'>
        {SOCIAL_MEDIA_ITEMS?.map((item, index) => (
          <Link
            key={index}
            href={item?.href || '#'}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
              'group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 w-40',
              'hover:scale-105 hover:shadow-lg hover:-translate-y-1',
              'border border-transparent hover:border-border text-white',
              item?.className
            )}
          >
            <div className='text-3xl group-hover:scale-110 transition-transform duration-300'>
              {item?.icon}
            </div>
            <span className='text-sm font-medium'>{item?.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
