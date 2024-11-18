import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">Laura Schooley</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <NavDropdown
              title={
                <Link
                  to="/portfolio"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Portfolio
                </Link>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Hatching Meeples
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                CLI Vehicle Application
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                The Squeegee Board
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Social Network API
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.5">Project 5</NavDropdown.Item> */}
              {/* This is where the final project link will go */}
            </NavDropdown>
            <Nav.Link>
              <Link to="/contact">Contact Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/resume">Resume</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
