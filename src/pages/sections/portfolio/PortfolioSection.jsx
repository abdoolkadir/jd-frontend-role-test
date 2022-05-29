import ClickHereForMore from '../../../components/shared/ClickHereForMore';
import ImageGallery from '../../../components/shared/ImageGallery';
import './portfolioSection.css';

function PortfolioSection({ styleBgColor, color, width, bgColor, padding }) {
  return (
    <section
      className="portfolio-section"
      style={{ backgroundColor: styleBgColor }}
    >
      <div className="container">
        <div className="portfolio-col-1">
          <h1 className="overlay-header-text" style={{ color: color }}>
            Portfolio
          </h1>
          <h2>Make Something Cool Every day</h2>
        </div>
        <div className="portfolio-col-2">
          <ImageGallery />
        </div>
      </div>
      <ClickHereForMore
        className={'portfolio-col-3'}
        text={'Like what you see? click here for more features.'}
        bgColor={bgColor}
        width={width}
        padding={padding}
      />
    </section>
  );
}
export default PortfolioSection;
