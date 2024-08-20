import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import luna from "../../Assets/luna.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luna}
              isBlog={false}
              title="Luna"
              description="This project is a voice-activated personal assistant application named Luna. The program integrates several Python libraries to enable speech recognition, text-to-speech, and a graphical user interface (GUI). It is designed to perform various tasks, including playing music, telling the time, retrieving information from Wikipedia, telling jokes, and interacting with a MySQL database containing book information."
              ghLink="https://github.com/YashikaWadhwani/Luna"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
