import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">

      <Container fluid className="cont">
        <div className="header__container">
          <Row className="header__row">
            <Col sm={12} className="header__col">
              <div>
                <h1 className="header__title">
                  Your free personalised
                  <br />
                  <b> landing page</b>
                </h1>
                <p className="p mb-5">
                  One link to create a own customizable landing page with links
                  and services to their various online platforms and resources
                  with cool features.
                </p>

                <div className="header__search">
                  <input
                    className="inp"
                    type="text"
                    placeholder="one.link/your_name"
                  />
                  <button className="btns">Claim my link</button>
                </div>

                <p className="reason">
                  {`it's free, secure, and takes less than a minute`}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
