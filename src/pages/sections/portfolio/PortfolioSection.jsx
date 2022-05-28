import ImageGallery from '../../../components/shared/ImageGallery';
import LinkBtn from '../../../components/shared/LinkBtn';
import { data } from './portfolio.data';
import './portfolioSection.css';

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-col-1">
          <h1 className="overlay-header-text">Portfolio</h1>
          <h2>Make Something Cool Every day</h2>
        </div>
        <div className="portfolio-col-2">
          <ImageGallery />
        </div>
        <div className="portfolio-col-3">
          <p>Like what you see? click here for more features.</p>
          <LinkBtn
            link={'portfolio'}
            btnText={'View More'}
            className={'btn-secondary'}
          />
        </div>
      </div>
    </section>
  );
}
export default PortfolioSection;
