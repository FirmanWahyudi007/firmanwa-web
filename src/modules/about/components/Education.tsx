import { AnimatePresence, motion } from 'framer-motion';
import { TabsContent } from '@/components/ui/tabs';
import cn from '@/lib/cn';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  tabs: string;
}

const Education = ({ tabs }: EducationProps) => {
  return (
    <TabsContent
      value='education'
      className={cn(
        'space-y-4 p-4 sm:p-6 bg-white mx-2 my-2 transition-all duration-300'
      )}
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
            <GraduationCap className='w-6 h-6 text-primary flex-shrink-0' />
            <h3 className='text-lg font-semibold'>Education Background</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            My educational journey and academic achievements.
          </p>

          {/* Add more content here */}
          <div className='space-y-4'>
            <div className='border rounded-lg p-4'>
              <h4 className='font-semibold'>University</h4>
              <p className='text-sm text-muted-foreground'>
                Education details here...
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  );
};

export default Education;
