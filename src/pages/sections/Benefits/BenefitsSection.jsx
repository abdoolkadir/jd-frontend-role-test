import { data } from '../../../data/card.data';
import Card from '../../../components/shared/Card';
import './benefitsSection.css';

function BenefitsSection() {
  console.log(data);
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-col-1">
          <h1 className="overlay-header-text">Benefits</h1>
          <h2>
            A Super Trendy Theme for Designers, Photographers and Creatives
          </h2>
        </div>
        <div className="benefits-col-2">
          {data.map(({ id, title, text, image, overlayText, bgColor }) => (
            <Card
              key={id}
              title={title}
              text={text}
              image={image}
              bgColor={bgColor}
              overlayText={overlayText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default BenefitsSection;
