import image from '../../../components/assets/image-3.png';
import './skillsSection.css';

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="container ">
        <div className="skills-col-1">
          <h1 className="overlay-header-text">Skills</h1>
          <h2>
            <span>Opportuinities and</span>{' '}
            <span>experiences that I enjoy</span>
          </h2>
        </div>
        <div className="skills-col-2">
          <div className="skills-inner-col-1">
            <img src={image} alt="" />
          </div>
          <div className="skills-inner-col-2">
            <div className="col-1">
              <div className="skills">
                <div className="skill" style={{ backgroundColor: '#911214' }}>
                  <h1>R</h1>
                  <span>1</span>
                </div>
                <div className="skill">
                  <h1>W</h1>
                  <span>2</span>
                </div>
                <div className="skill">
                  <h1>G</h1>
                  <span>3</span>
                </div>
              </div>
              <div className="skill-output">
                <h4>Responsiveness</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quia dolorum enim eveniet provident tenetur, error
                  magnam ipsum amet alias quam facere accusamus aliquid
                  obcaecati sint dignissimos quo temporibus in!
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="quotes">
                <h3>Heres a nice Quote</h3>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  minus cum neque reprehenderit quod enim perferendis sit
                  asperiores molestias blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;
