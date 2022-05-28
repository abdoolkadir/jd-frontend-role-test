import Header from '../../components/layout/header/Header';
import BenefitsSection from '../sections/Benefits/BenefitsSection';
import PortfolioSection from '../sections/portfolio/PortfolioSection';
import SkillsSection from '../sections/skills/SkillsSection';

import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <BenefitsSection />
      <PortfolioSection />
      <SkillsSection />
    </div>
  );
}
export default Home;
