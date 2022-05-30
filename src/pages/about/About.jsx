import PagesHeader from '../../components/shared/PagesHeader';
import SkillsSection from '../sections/skills/SkillsSection';

function About() {
  return (
    <div>
      <PagesHeader headerText={'About Me'} subText={null} />
      <SkillsSection />
    </div>
  );
}
export default About;
