import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Contact from '@/modules/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Firman Wahyudi',
  description:
    'Feel free to reach out and connect with me on these platforms. I&apos;m always open to networking, collaborations, and engaging with the community.',
};
export default function ContactPage() {
  return (
    <>
      <Container data-aos='fade-up' className='lg:w-[70vw]'>
        <PageHeading
          title='Contact'
          description="Feel free to reach out and connect with me on these platforms. I'm always open to networking, collaborations, and engaging with the community."
        />
        <Contact />
      </Container>
    </>
  );
}
