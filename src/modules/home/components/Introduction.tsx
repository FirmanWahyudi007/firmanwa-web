const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
          <h1>Hi, I&apos;m Firman</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in East Java, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
            <li>Full Time</li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose text-justify'>
        I&apos;m Full-Stack Developer focused on Laravel (PHP), Node.js
        (NestJS/Express), and Golang—writing clean, modular, and testable code
        using the service–repository pattern for long-term maintainability and
        scalability. On the frontend, I craft responsive, reusable interfaces
        with React/Next.js, TypeScript, and Tailwind, prioritizing clear UX and
        measurable performance. I’m also proficient in designing relational
        schemas and optimizing queries in MySQL and PostgreSQL, supported by
        disciplined API documentation and an organized Git workflow.
      </p>
    </section>
  );
};

export default Introduction;
