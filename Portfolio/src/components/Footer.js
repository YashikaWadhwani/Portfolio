import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si"

function Footer() {
  //let date = new Date();
  //let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
           
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yashika-wadhwani-b47917241/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://tryhackme.com/p/yashika.wadhwani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTryhackme />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/@yashikawadhwani5006"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                < AiOutlineYoutube/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yashikawadhwani_official/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/YashikaWadhwani"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
