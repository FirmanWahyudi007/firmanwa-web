import Container from '@/common/components/elements/Container';
import Home from '@/modules/home';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Firman Wahyudi - Personal Website',
  description: 'Welcome to my personal website',
};
export default function HomePage() {
  return (
    <>
      <Container data-aos='fade-up' className='lg:w-[70vw]'>
        <Home />
      </Container>
    </>
  );
}
