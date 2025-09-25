import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import About from '@/modules/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Firman Wahyudi',
  description:
    'A simple introduction—because meaningful details build the bigger picture.',
};
export default function AboutPage() {
  return (
    <>
      <Container data-aos='fade-up' className='lg:w-[70vw]'>
        <PageHeading
          title='About'
          description='A simple introduction—because meaningful details build the bigger picture.'
        />
        <About />
      </Container>
    </>
  );
}
