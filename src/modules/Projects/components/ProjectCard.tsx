// src/modules/Projects/components/ProjectCard.tsx
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectItemProps } from '@/common/types/projects';
import { STACKS } from '@/common/constant/stacks';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ProjectCard = ({
  title,
  description,
  image,
  stacks,
  is_featured,
  link_demo: demo_url,
  link_github: repo_url,
}: ProjectItemProps) => {
  const stacksArray = stacks.split(',').map((stack) => stack.trim());
  return (
    <Card className='group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300'>
      {/* Project Image */}
      <div className='relative h-48 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-contain group-hover:scale-105 transition-transform duration-300'
        />
        {is_featured && (
          <Badge className='absolute top-2 right-2 bg-primary'>Featured</Badge>
        )}
        <div className='absolute bottom-2 left-2'>
          {stacksArray.map((stack: string, index: number) => (
            <Badge
              key={index}
              className='bg-primary opacity-50 hover:opacity-100 m-1 rounded-full'
            >
              <Tooltip delayDuration={100}>
                <TooltipTrigger className='m-1'>
                  <span className=''>{STACKS[stack]}</span>
                </TooltipTrigger>
                <TooltipContent>{stack}</TooltipContent>
              </Tooltip>
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader className='pb-3'>
        <CardTitle className='line-clamp-1'>{title}</CardTitle>
        <CardDescription className='line-clamp-4'>
          {description}
        </CardDescription>
      </CardHeader>
      {/* 
      <CardContent className='flex-1 pb-3'>
        <div className='flex flex-wrap gap-1'>
          {stacksArray.map((stack: string, index: number) => (
            <Tooltip key={index} delayDuration={100}>
              <TooltipTrigger className='m-1'>
                <span className=''>{STACKS[stack]}</span>
              </TooltipTrigger>
              <TooltipContent>{stack}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent> */}

      <CardFooter className='pt-0 gap-2'>
        {demo_url && (
          <Button asChild size='sm' className='flex-1'>
            <Link href={demo_url} target='_blank'>
              <ExternalLink className='w-4 h-4 mr-1' />
              Demo
            </Link>
          </Button>
        )}
        {repo_url && (
          <Button asChild size='sm' variant='outline' className='flex-1'>
            <Link href={repo_url} target='_blank'>
              <Github className='w-4 h-4 mr-1' />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
