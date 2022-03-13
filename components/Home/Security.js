import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrFormNextLink } from "react-icons/gr";

function Card() {
  return (
    <div className="security__card">
      <img src={props.bgSrc} alt="bg" className="security__card__image" />
      <p>{title}</p>
      <button>Learn More</button>
    </div>
  );
}

export default function Security() {
  return (
    <div className="security">
      <Container fluid className="section">
        <Row className="security__row1">
          <Col
            sm={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img src="/secure.png" alt="guard" width={"300px"} />
          </Col>
          <Col sm={12} md={6} className="d-flex align-items-center">
            <div>
              <h1 className="h1 mb-5">
                Most <b>Secure</b> Crypto Wallet
              </h1>
              <p className="p mb-5">
                CryptoPay generates passwords and keys on your device, so only
                you have access to your accounts and data. You always choose
                what to share and what to keep private.CryptoPay makes it safe &
                easy for you to store, buy, send, receive, swap tokens and
                collect NFTs on the Solana blockchain.
              </p>

              <button className="butn butn--2">
                Learn More <GrFormNextLink />
              </button>
            </div>
          </Col>
        </Row>

        <Row className="security__row2">
          <Col sm={12} md={3} className="safety__card">
            <Image src="/icons/1.svg" width={80} height={80} />
            <h5>Military-grade Security</h5>
            <p className="p">Storage held in military-grade Class III vaults</p>
          </Col>
          <Col sm={12} md={3} className="safety__card">
            <Image src="/icons/2.svg" width={80} height={80} />
            <h5>Third-party Audits</h5>
            <p className="p">
              Independent, real-time reserves audit by Armanino
            </p>
          </Col>
          <Col sm={12} md={3} className="safety__card">
            <Image src="/icons/3.svg" width={80} height={80} />
            <h5>ISO 27001:2013 Certified</h5>
            <p className="p">
              Impeccable risk assessment, data protection, and enhanced
              cybersecurity
            </p>
          </Col>
          <Col sm={12} md={3} className="safety__card">
            <Image src="/icons/4.svg" width={80} height={80} />
            <h5>$375 million Insurance</h5>
            <p className="p">Disinfection wash of all raw vegetables</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
