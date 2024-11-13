

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact-info container">
      <form>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control"id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={3}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    </div>
  );
};
