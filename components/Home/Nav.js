import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Nav() {
  return (
    <div className="nav">
      <Container fluid className="section section--big">
        <Row className="align-items-center">
          <Col>
            <img src="/logo2.png" alt="logo" width={"250px"} />
          </Col>
          <Col sm={0} className="d-flex justify-content-around">
            <div className="nav__links">
              <Link href="#">Start</Link>
            </div>
            <div className="nav__links">
              <Link href="#">Services</Link>
            </div>
            <div className="nav__links">
              <Link href="#">Features</Link>
            </div>
            <div className="nav__links">
              <Link href="#">Security</Link>
            </div>
            <div className="nav__links">
              <Link href="#">Web3.0</Link>
            </div>
            <div className="nav__links">
              <Link href="#">Merchant</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
