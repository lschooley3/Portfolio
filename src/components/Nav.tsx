 import { Link } from "react-router-dom";
 
 const Nav = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;