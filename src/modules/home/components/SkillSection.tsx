import SectionHeading from '@/common/components/elements/SectionHeading';
import Skills from '../partials/Skills';

const SkillsSection = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title='What I Use' />
      </div>
      <Skills />
    </section>
  );
};

export default SkillsSection;
