import Breakline from './Breakline';

interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <>
      <h1 className=' text-2xl font-medium'>{title}</h1>
      <p className='mb-2 border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400'>
        {description}
      </p>
      <Breakline className='mb-7 mt-2' />
    </>
  );
};

export default PageHeading;
