import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { Col, Row } from "react-bootstrap";
import {
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiKalilinux,
  SiLetsencrypt,
  SiSnort,
  SiVmware,
  SiTryhackme,
  SiHackerone,
  SiHackthebox
} from "react-icons/si";
import {
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMetasploit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBurpsuite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLetsencrypt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnort />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTryhackme />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackerone />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackthebox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Toolstack;
