import { Link } from 'react-router-dom';
import '../navbar/navbar.css';
import { menuData } from '../../../data/navbar.data';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Starking</h1>
        </div>

        <nav>
          <ul>
            {menuData.map((data, index) =>
              data.submenu ? (
                <li className="submenu">
                  <button>{data.title}</button>
                  <ul className="submenu-items">
                    {data.submenu.map((submenu) => (
                      <li>
                        <Link to="#">{submenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <Link to="#">{data.title}</Link>
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
