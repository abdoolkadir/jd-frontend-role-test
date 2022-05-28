import heroImage from '../../assets/image-1.png';
import LinkBtn from '../../shared/LinkBtn';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-col-left">
          <h1>
            <span>Style sees beauty</span>
            <span>in simplicity</span>
          </h1>
          <p>I'm very proud to present some of my latest work</p>
          <LinkBtn
            link={'/portfolio'}
            btnText={'Go to portfolio'}
            className={'btn'}
          />
        </div>
        <div className="header-col-right">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Header;
