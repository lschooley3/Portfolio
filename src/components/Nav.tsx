import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">About Me</Link></Nav.Link>
            <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
            
            <Nav.Link>
              <Link to="/contact">Contact Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/resume">Resume</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <div className="hero-banner">
      <h2 className="display-1"> Laura Schooley</h2>
      <p> Explore my projects and learn more about me!</p>
    </div>
    </>
  );
}

export default Navigation;
