import { Link } from "react-router-dom";

const NavbarProject = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          {/* Links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/"}>HOME</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/login"}>Login</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/registration"}>Registration</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/menu"}>menu</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/recipe"}>recipe</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavbarProject;
