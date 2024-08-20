import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashika Wadhwani </span>
            from <span className="purple"> Gurugram, India.</span>
            <br />
            I am currently persuing Btech in CSE with Cyber Security as my specialization. .
            <br />
            <br />
            Apart from Cyber Security, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Subconcious Mind Amazes me! 
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
