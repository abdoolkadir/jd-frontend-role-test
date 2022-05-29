import PagesHeader from '../../components/shared/PagesHeader';
import PortfolioSection from '../sections/portfolio/PortfolioSection';

function Portfolio() {
  return (
    <div>
      <PagesHeader
        subText={
          'Create a profession website to showoff your work and your artisitic vision'
        }
        headerText={'Online portfolio website'}
      />
      <PortfolioSection
        styleBgColor={'#232428'}
        color={'#232428'}
        bgColor={'#0F0F11'}
        width={'100%'}
        padding={'2rem'}
      />
    </div>
  );
}
export default Portfolio;
