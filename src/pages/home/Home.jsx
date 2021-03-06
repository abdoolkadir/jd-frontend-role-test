import Header from '../../components/layout/header/Header';
import BenefitsSection from '../sections/Benefits/BenefitsSection';
import PortfolioSection from '../sections/portfolio/PortfolioSection';
import ProcessSection from '../sections/process/ProcessSection';
import SkillsSection from '../sections/skills/SkillsSection';

import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <BenefitsSection />
      <PortfolioSection bgColor={'#373a3e'} />
      <SkillsSection />
      <ProcessSection text={'Like what you see? Click here for more'} />
    </div>
  );
}
export default Home;
