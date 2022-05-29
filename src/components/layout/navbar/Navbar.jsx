import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import { menuData } from '../../../data/navbar.data';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const ref = useOnclickOutside(() => {
    setIsOpen(false);
  });
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">Starking</Link>
          </h1>
        </div>

        <nav>
          <ul>
            {menuData.map((data, index) =>
              data.submenu ? (
                <li className="submenu">
                  <button onClick={toggling}>
                    {data.title} <FaAngleDown />
                  </button>
                  {isOpen && (
                    <ul className="submenu-items" ref={ref}>
                      {data.submenu.map((submenu) => (
                        <li>
                          <Link to={submenu.title} onClick={toggling}>
                            {submenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link to={data.title === 'Home' ? '/' : data.title}>
                    {data.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
