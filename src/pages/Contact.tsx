import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

export const Contact = () => {
  return (
    <div>
      <Container>
        <h1>Contact</h1>
        <div className="contact-info container">
          <form>
            <div className="form-group form-group-A">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group form-group-A">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group form-group-A">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={3}
              />
            </div>
            <Button as="input" type="submit" value="Send" />
          </form>
        </div>
      </Container>
    </div>
  );
};
