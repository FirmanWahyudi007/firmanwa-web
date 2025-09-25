import { CareerItemProps } from '@/common/types/career';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const CareerCard = ({
  company,
  position,
  type,
  logo,
  startDate,
  endDate,
  responsibilities,
  link,
}: CareerItemProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const displayPeriod = endDate
    ? `${startDate} - ${endDate}`
    : `${startDate} - Present`;

  return (
    <Card className='hover:shadow-md transition-shadow duration-200'>
      <CardContent className='px-4'>
        <div className='flex items-start gap-4'>
          <div className='flex-shrink-0 w-16 h-16 bg-muted flex items-center justify-center rounded-lg overflow-hidden'>
            <Image
              src={logo}
              alt={`${company} logo`}
              width={64}
              height={64}
              loading='lazy'
              className='w-full h-full object-contain'
            />
          </div>

          <div className='flex-1 min-w-0'>
            <div className='flex items-start justify-between mb-2'>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-foreground line-clamp-1'>
                  {position}
                </h3>
                <p className='text-sm font-medium text-primary mb-1'>
                  {company}
                </p>

                <div className='flex items-center gap-2 mb-3'>
                  <Badge variant='secondary' className='text-xs'>
                    <Calendar className='w-3 h-3 mr-1' />
                    {displayPeriod}
                  </Badge>
                  <Badge variant='outline' className='text-xs'>
                    {type}
                  </Badge>
                </div>

                {responsibilities && responsibilities.length > 0 && (
                  <div className='space-y-2'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => setShowDetails(!showDetails)}
                      className='h-6 px-2 text-xs'
                    >
                      {showDetails ? (
                        <>
                          <ChevronUp className='w-3 h-3 mr-1' />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className='w-3 h-3 mr-1' />
                          Show Details
                        </>
                      )}
                    </Button>
                    <AnimatePresence>
                      {showDetails && (
                        <motion.ul
                          className='ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400'
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          {responsibilities.map((responsibility, index) => (
                            <motion.li key={index} layout>
                              {responsibility}
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {link && (
                  <div className='mt-3'>
                    <Button asChild size='sm' variant='outline' className='h-7'>
                      <Link
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1'
                      >
                        <ExternalLink className='w-3 h-3' />
                        <span className='text-xs'>Visit Company</span>
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
