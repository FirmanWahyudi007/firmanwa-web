import { EducationItemProps } from '@/common/types/education';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Calendar } from 'lucide-react';

const EducationCard = ({
  institution,
  major,
  degree,
  logo,
  startYear,
  endYear,
  link,
}: EducationItemProps) => {
  const displayYear =
    startYear === endYear ? startYear.toString() : `${startYear} - ${endYear}`;

  return (
    <Card className='hover:shadow-md transition-shadow duration-200'>
      <CardContent className='p-4'>
        <div className='flex items-start gap-4'>
          <div className='flex-shrink-0 w-16 h-16 bg-muted flex items-center justify-center rounded-lg overflow-hidden'>
            <Image
              src={logo}
              alt={`${institution} logo`}
              width={64}
              height={64}
              loading='lazy'
              className='w-full h-full object-contain'
            />
          </div>

          <div className='flex-1 min-w-0'>
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <h3 className='text-lg font-semibold text-foreground line-clamp-1'>
                  {degree}
                </h3>
                <p className='text-sm font-medium text-primary mb-1'>{major}</p>
                <p className='text-sm text-muted-foreground mb-2'>
                  {institution}
                </p>

                <div className='flex items-center gap-2'>
                  <Badge variant='secondary' className='text-xs'>
                    <Calendar className='w-3 h-3 mr-1' />
                    {displayYear}
                  </Badge>

                  {link && (
                    <Button
                      asChild
                      size='sm'
                      variant='ghost'
                      className='h-6 px-2'
                    >
                      <Link
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1'
                      >
                        <ExternalLink className='w-3 h-3' />
                        <span className='text-xs'>View</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
