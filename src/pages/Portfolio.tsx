import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Meeple from '../assets/alexander-lyashkov-meeple.jpg';
import CLI from '../assets/ilya-pavlov-CLI.jpg';
import Squeegee from '../assets/glenn-carstens-peters-squeegee.jpg';
import API from '../assets/chris-ried-API.jpg';

export const Portfolio = () => {
  const projects = [
    {
      title: "Hatching Meeples",
      description: `Hatching Meeples is a web application designed to bring board
                game enthusiasts together. Built over the course of two weeks,
                this project helps users connect and organize board game
                meetups, making it easy to find new players and enjoy your
                favorite games.
                
                I took the lead on the front-end development, focusing on
                creating an intuitive user experience and clean, responsive
                design. Using modern web technologies, I aimed to make the app
                both functional and visually appealing, ensuring a smooth
                experience across different devices.`,
      image: Meeple,
      repo: "https://github.com/fluviangumbo/Board-Game-Night",
      deployed: "https://hatching-meeples.herokuapp.com/",
    },
    {
      title: "CLI Vehicle Application",
      description: `The CLI Vehicle Application is a command-line interface program
                where users can pick a vehicle (car, truck, or motorcycle) to
                drive within the application. Users also have the option to
                create their own vehicle if their desired vehicle isn't
                available.
              
                The application features unique capabilities: motorcycles can
                perform wheelies, and trucks can tow other vehicles, adding an
                extra layer of interactivity and fun for the user.`,
      image: CLI,
      repo: "https://github.com/lschooley3/08vehicle",
    },
    {
      title: "The Squeegee Board",
      description: `Squeegee Board is a dynamic task-tracking application designed
                to help users organize their to-do lists efficiently. Users can
                easily upload tasks and categorize them based on priority,
                allowing for streamlined project management and a clear overview
                of their workload. The intuitive interface enables users to sort
                and group tasks, making it simple to identify and focus on
                high-priority items.
              
                This project was the first application Laura built entirely from
                scratch as part of a group project during her KU coding
                bootcamp. It showcases her ability to collaborate effectively
                within a team while implementing full-stack development skills.
                The Squeegee Board project highlights Laura's proficiency in
                creating user-centric applications that address practical needs
                in task management.`,
      image: Squeegee,
      repo: "https://github.com/JasonBusenitz/task-tracker",
    },
    {
      title: "Social Network API",
      description: `The Social Network API provides a robust backend foundation for
                a social networking application, allowing users to seamlessly
                interact and share content. Built from scratch, this API enables
                users to manage their social connections by adding and removing
                friends, as well as creating, updating, and deleting "thoughts"
                — short user-generated posts. Users can also engage with content
                by creating reactions to thoughts and have the flexibility to
                delete these reactions as needed.
              
                This project demonstrates Laura's expertise in backend
                development and API design, focusing on efficient data handling
                and clear, organized endpoints. Developed during her KU
                bootcamp, it highlights her ability to implement complex
                relationships and CRUD functionalities, laying the groundwork
                for a scalable and user-friendly social networking platform.`,
      image: API,
      repo: "https://github.com/lschooley3/17SocialNetworkAPI"
    },
  ];

  return (
    <>
    <h1>Portfolio</h1>
    <div style={{display:'flex', flexWrap:'wrap'}}>
      {projects.map((project, idx) => (
        /*<Col key={idx} sm={6}> */
          <Card key={idx} className="card-style">
            <Card.Img
              variant="top"
              src={project.image}
              alt={`${project.title} image`}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>

                    <Card.Text>{project.description}</Card.Text>

            </Card.Body>
          </Card>

        /* </Col> */
      ))}
    </div>
  </>
);
};

export default Portfolio;

