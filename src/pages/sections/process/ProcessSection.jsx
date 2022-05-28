import { process } from '../../../data/process.data';
import image from '../../../components/assets/image-2.png';
import ProcessBar from '../../../components/shared/ProcessBar';
import './processSection.css';
import LinkBtn from '../../../components/shared/LinkBtn';

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-col-1 container">
        <h1 className="overlay-header-text">Process</h1>
        <h2>
          <span>Present your work</span>
          <span>in style</span>
        </h2>
      </div>

      <div className="process-flex">
        <div className="process-col-2">
          {process.map(
            ({ id, processText, title, processRank, color, width }) => (
              <ProcessBar
                key={id}
                width={width}
                color={color}
                processRank={processRank}
                title={title}
                processText={processText}
              />
            )
          )}
        </div>

        <div className="process-col-3">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="process-col-4">
        <p>Like what you see? Click here for more</p>
        <LinkBtn btnText="View more" className="btn" link={'/portfolio'} />
      </div>
    </section>
  );
}

export default ProcessSection;
