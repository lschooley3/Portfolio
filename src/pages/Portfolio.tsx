import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

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
      image: "https://via.placeholder.com/300x200?text=Hatching+Meeples",
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
      image: "https://via.placeholder.com/300x200?text=CLI+Vehicle+App",
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
      image: "https://via.placeholder.com/300x200?text=Squeegee+Board",
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
      image: "https://via.placeholder.com/300x200?text=Social+Network+API",
    },
  ];

  return (
    <div>
    <h1>Portfolio</h1>
    <Row xs={1} md={2} lg={2} className="g-4 d-flex justify-content-center">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card className="p-3 h-100">
            <Card.Img
              variant="top"
              src={project.image}
              alt={`${project.title} image`}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{project.title}</Accordion.Header>
                  <Accordion.Body>
                    <Card.Text>{project.description}</Card.Text>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
};

export default Portfolio;

