import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Project from '@/modules/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Firman Wahyudi',
  description:
    'A showcase of my projects and works, both private and open-source.',
};
export default function Projects() {
  return (
    <>
      <Container data-aos='fade-up' className='lg:w-[70vw]'>
        <PageHeading
          title='Projects'
          description='A showcase of my projects and works, both private and open-source.'
        />
        <Project />
      </Container>
    </>
  );
}
