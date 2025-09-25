import { AnimatePresence, motion } from 'framer-motion';
import GoogleDocsEmbed from '@/common/components/elements/GoogleDocsEmbed';
import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import { Download, ExternalLink, FileText } from 'lucide-react';
import Link from 'next/link';

interface ResumeProps {
  tabs: string;
}

const Resume = ({ tabs }: ResumeProps) => {
  const RESUME_URL =
    'https://docs.google.com/document/d/1EIvuoGEtnUiflxGgFyxfDJMhbZrp8_jJ/edit';

  return (
    <TabsContent
      value='resume'
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
            <FileText className='w-6 h-6 text-primary flex-shrink-0' />
            <h3 className='text-lg font-semibold'>Resume & CV</h3>
          </div>
          <p className='text-sm text-muted-foreground'>
            Download or view my complete resume and curriculum vitae.
          </p>
          <Button asChild size='lg' className='gap-2 w-full sm:w-auto mb-2'>
            <Link href={RESUME_URL} target='_blank' rel='noopener noreferrer'>
              <Download className='w-4 h-4 flex-shrink-0' />
              <span className='truncate'>Download CV</span>
              <ExternalLink className='w-3 h-3 opacity-70 flex-shrink-0' />
            </Link>
          </Button>

          <GoogleDocsEmbed src={RESUME_URL} />
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  );
};

export default Resume;
