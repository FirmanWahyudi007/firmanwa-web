import Breakline from '@/common/components/elements/Breakline';
import Introduction from './Introduction';
import SkillsSection from './SkillSection';
import Service from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <SkillsSection />
      <Breakline className='mb-7 mt-8' />
      <Service />
      <Breakline className='mb-7 mt-8' />
      <Contact />
    </>
  );
};

export default Home;
