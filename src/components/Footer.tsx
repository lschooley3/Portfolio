import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-body-tertiary py-3">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="mx-3"><FaLinkedin size={30} /></a>
                        <a href="https://www.github.com/lschooley3" target="_blank" rel="noopener noreferrer" className="mx-3"><FaGithub size={30} /></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
    }

export default Footer;