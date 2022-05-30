import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { FaAngleDown, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import { menuData } from '../../../data/navbar.data';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const ref = useOnclickOutside(() => {
    setIsOpen(false);
  });

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">Starking</Link>
          </h1>
        </div>

        <nav className={navMenu ? 'nav-menu-open' : 'nav-menu-close'}>
          <ul>
            {menuData.map((data, index) =>
              data.submenu ? (
                <li className="submenu" key={index}>
                  <button onClick={toggling}>
                    {data.title} <FaAngleDown />
                  </button>
                  {isOpen && (
                    <ul className="submenu-items" ref={ref}>
                      {data.submenu.map((submenu) => (
                        <li key={index}>
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

        <FaBars className="nav-menu-bar" onClick={handleNavMenu} />
      </div>
    </div>
  );
}
export default Navbar;
