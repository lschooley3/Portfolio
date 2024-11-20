import Me from "../assets/Me.jpg";

export const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="display-1">
        About Me
        <small className="text-muted"> - Laura Schooley</small>
      </h1>

      <div className="flex-item about-me-container">
        <img
          src={Me}
          alt="placeholder"
          className="flex-item"
          id="about-me-image"
        />
        <div className="flex-item container">
          <p className="mb-2">
            Hi there! I’m Laura, a web developer based in Kansas City, making an
            exciting career shift from teaching high school mathematics for 9
            years after majoring in mathematics. I’m currently deep into a
            coding bootcamp through the University of Kansas, where I’ve been
            building my skills in Node.js, TypeScript, PostgreSQL, GraphQL, and
            basic Python over the past 6 months.
          
<br></br>
<br></br>
          
            I’m passionate about problem-solving and love creating efficient,
            user-friendly applications. When I’m not coding, I enjoy getting
            crafty, playing board games, or relaxing with a good game like
            Stardew Valley or The Legend of Zelda. I’m eager to continue
            learning, growing, and collaborating on exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};
