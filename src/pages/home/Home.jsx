import Header from '../../components/layout/header/Header';
import BenefitsSection from '../sections/Benefits/BenefitsSection';
import PortfolioSection from '../sections/portfolio/PortfolioSection';

import './home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <BenefitsSection />
      <PortfolioSection />
    </div>
  );
}
export default Home;
