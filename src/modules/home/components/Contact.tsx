import Link from 'next/link';

// ContactCTA.tsx (English)
export default function Contact() {
  return (
    <section id='contact' className='py-20'>
      <div className='mx-auto max-w-4xl px-4 text-center'>
        <h2 className='text-3xl font-bold tracking-tight'>
          Let&apos;s Build Something
        </h2>
        <p className='mx-auto mt-3 max-w-2xl text-base text-gray-600'>
          Have an idea or project in mind? I&apos;m open to freelance/contract
          and full-time collaborations.
        </p>

        <div className='mt-8 flex justify-center'>
          <Link
            href={'/contact'}
            className='rounded-2xl border px-5 py-3 text-lg font-medium shadow-sm hover:shadow transition-shadow'
          >
            Contact Me!
          </Link>
        </div>
      </div>
    </section>
  );
}
