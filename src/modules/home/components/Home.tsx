import Breakline from '@/common/components/elements/Breakline';
import Introduction from './Introduction';
import SkillsSection from './SkillSection';

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <SkillsSection />
    </>
  );
};

export default Home;
