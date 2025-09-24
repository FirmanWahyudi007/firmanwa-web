// src/modules/Projects/components/Project.tsx
'use client';
import { motion } from 'framer-motion';
import { PROJECT_ITEMS } from '@/common/constant/projects';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = PROJECT_ITEMS.filter((project) => project.is_show);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 2);
  };

  const hasMore = visibleProjects < projects.length;
  return (
    <div className='w-full space-y-6'>
      <InfiniteScroll
        dataLength={visibleProjects}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <div className='flex justify-center py-4'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
          </div>
        }
        style={{ overflow: 'hidden' }}
      >
        <div className='grid gap-5 px-1 pt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Project;
