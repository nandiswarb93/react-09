import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./navigation";

const NavBar = () => {
  const { darkMode } = useContext(MyContext);

  return (
    <nav
      className={`navbar navbar-expand-sm bg-${
        darkMode ? "dark" : "light"
      } navbar-dark`}
    >
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
