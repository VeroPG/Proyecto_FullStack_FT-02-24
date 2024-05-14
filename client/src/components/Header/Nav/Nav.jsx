
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-no-background.svg";

const Nav = () => {

  return(
    <nav className="nav">
      <figure>
        <img src={logo} alt="logo" className="logo" />
      </figure>
      <ul className="nav-bar">
        <li className="nav-link">
          <Link to="/" 
          className="nav-link"
          >Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/search" 
          className="nav-link"
          >Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;