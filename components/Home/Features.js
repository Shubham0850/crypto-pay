import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Features() {
  return (
    <div className="features">
      <Container>
        <Row>
          <div className="features__box">
            <div>
              <h1 className="h1">Home for all your NFTs</h1>
              <p className="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div>
              <img src="/nfts.jpg" alt="nft" width={"300px"} />
            </div>
          </div>
        </Row>

        <div className="d-flex justify-content-center">
          <div className="features__box features__box2">
            <div>
              <h1 className="h1">Earn Cashbacks</h1>
              <p className="p mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <img src="/cashback.webp" alt="nft" className="mt-5" />
            </div>
          </div>

          <div className="features__box features__box2">
            <div>
              <h1 className="h1">Swap with ease</h1>
              <p className="p mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <img src="/swap.png" alt="nft" className="mt-5" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
