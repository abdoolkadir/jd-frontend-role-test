import image from '../../assets/image-4.png';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <h1>
              <Link to="/">Starking</Link>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto iusto iure repudiandae sit perspiciatis nostrum.
            </p>
          </div>
          <div className="grid-item">
            <img src={image} alt="" />
          </div>
          <div className="grid-item">
            <h4>Our Address</h4>
          </div>
          <div className="grid-item">
            <h4>Copyright</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
