import { AnimatePresence, motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import { Briefcase } from 'lucide-react';
import { CAREER_ITEMS } from '@/common/constant/career';
import CareerCard from './CareerCard';

interface CareerProps {
  tabs: string;
}
const Career = ({ tabs }: CareerProps) => {
  const careers = CAREER_ITEMS;
  return (
    <TabsContent
      value='career'
      className='space-y-4 p-4 sm:p-6 bg-white mx-2 my-2'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={tabs}
          initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          style={{ willChange: 'opacity, transform, filter' }}
        >
          <div className='flex items-center gap-3 mb-4'>
            <Briefcase className='w-6 h-6 text-primary' />
            <h3 className='text-lg font-semibold'>Career Journey</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            Professional experience and career milestones.
          </p>

          {/* Add more content here */}
          <div className='space-y-4'>
            {careers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  );
};

export default Career;
