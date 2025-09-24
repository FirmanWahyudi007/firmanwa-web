// src/modules/about/components/About.tsx
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Briefcase, FileText } from 'lucide-react';
import Education from './Education';
import Career from './Career';
import Resume from './Resume';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='w-full bg-muted rounded-lg py-2'
      >
        <TabsList className='grid w-full grid-cols-3 p-1 mb-7 lg:mb-0 px-2'>
          <TabsTrigger
            value='education'
            className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2'
          >
            <GraduationCap className='w-4 h-4 flex-shrink-0' />
            <span className='text-xs sm:text-sm'>Education</span>
          </TabsTrigger>
          <TabsTrigger
            value='career'
            className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2'
          >
            <Briefcase className='w-4 h-4 flex-shrink-0' />
            <span className='text-xs sm:text-sm'>Career</span>
          </TabsTrigger>
          <TabsTrigger
            value='resume'
            className='flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2'
          >
            <FileText className='w-4 h-4 flex-shrink-0' />
            <span className='text-xs sm:text-sm'>Resume</span>
          </TabsTrigger>
        </TabsList>
        <Education tabs={activeTab} />
        <Career tabs={activeTab} />
        <Resume tabs={activeTab} />
      </Tabs>
    </>
  );
};

export default About;
