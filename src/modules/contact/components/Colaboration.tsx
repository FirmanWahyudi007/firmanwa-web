import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const Colaboration = () => {
  return (
    <div className='text-center space-y-4 bg-muted/50 rounded-lg p-8'>
      <h3 className='text-xl font-semibold'>Ready to Start Your Project?</h3>
      <p className='text-muted-foreground'>
        Let&apos;s turn your ideas into reality. Reach out and let&apos;s
        discuss how we can work together.
      </p>
      <Button size='lg' asChild>
        <Link href='mailto:firmanwhyd007@gmail.com'>
          <Mail className='w-4 h-4 mr-2' />
          Send Me an Email
        </Link>
      </Button>
    </div>
  );
};

export default Colaboration;
