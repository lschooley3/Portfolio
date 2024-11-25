import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Resume.pdf";

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link className="nav-a"><Link to="/">About Me</Link></Nav.Link>
            <Nav.Link className="nav-a"><Link to="/portfolio">Portfolio</Link></Nav.Link>
            
            <Nav.Link className="nav-a">
              <Link to="/contact">Contact Me</Link>
            </Nav.Link>
            <Nav.Link className="nav-a link">
                <Link to={Resume} target ="_blank" download="SchooleyResume">Download Resume</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <div className="hero-banner">
      <div>
        <h2 className="display-1"> Laura Schooley</h2>
      <p> Explore my projects and learn more about me!</p>
      </div>
    </div>
    </>
  );
}

export default Navigation;
