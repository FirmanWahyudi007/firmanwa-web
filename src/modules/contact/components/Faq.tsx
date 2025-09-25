// src/modules/contact/components/Faq.tsx
import SectionHeading from '@/common/components/elements/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        'I usually respond to messages within 24 hours, but often much faster during business hours (9 AM - 6 PM GMT+7).',
    },
    {
      question: 'What communication channels do you prefer?',
      answer:
        'Email for briefs/files, WhatsApp for quick coordination, and Zoom/Google Meet for calls.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, I offer post-launch support and maintenance packages to ensure your application stays updated, secure, and performs optimally.',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='Frequently Asked Questions' />
        <p className='text-muted-foreground text-sm'>
          Everything you need to know about working with me
        </p>
      </div>

      <Accordion type='single' collapsible className='w-full'>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-left hover:text-primary'>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
