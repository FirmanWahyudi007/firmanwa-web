import SectionHeading from '@/common/components/elements/SectionHeading';

// ServicesSection.tsx (EN paragraph)
export default function Services() {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='What I Do' />
      </div>
      <p className='text-base leading-7 text-gray-700'>
        I help teams ship reliable web apps through secure backend APIs, fast
        and accessible UIs, and well-structured data models—delivered with
        clean, testable code using the service–repository pattern for long-term
        maintainability and scalability.
      </p>
    </section>
  );
}
