import Breakline from '@/common/components/elements/Breakline';
import SocialMedia from './SocialMedia';
import FAQ from './Faq';
import Availability from './Availability';
import Colaboration from './Colaboration';

const Contant = () => {
  return (
    <>
      <SocialMedia />
      <Breakline className='mb-7 mt-8' />
      <FAQ />
      <Availability />
      <Breakline className='mb-7 mt-8' />
      <Colaboration />
    </>
  );
};

export default Contant;
