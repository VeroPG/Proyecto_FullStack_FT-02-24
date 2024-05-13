
import { Link } from "react-router-dom";

const Nav = () => {

  return(
    <nav className="nav">
      
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
        <li className="nav-link">
          <Link to="/new" 
          className="nav-link"
          >
            Create Pokemon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;