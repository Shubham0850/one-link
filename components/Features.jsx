import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AiTwotoneHeart } from "react-icons/ai";
import { HiColorSwatch } from "react-icons/hi";
import { MdQueryStats } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import Divider from "./Divider";

export default function Features() {
  return (
    <div>
      <Divider />
      <div className="features">
        <Container fluid className="cont">
          <Row>
            <Col sm={6} md={3}>
              <div className="text-center">
                <span>
                  <AiTwotoneHeart />
                </span>
                <p>Free & secure forever</p>
              </div>
            </Col>

            <Col sm={6} md={3}>
              <div className="text-center">
                <span>
                  <HiColorSwatch />
                </span>
                <p>10+ premium themes</p>
              </div>
            </Col>

            <Col sm={6} md={3}>
              <div className="text-center">
                <span>
                  <MdQueryStats />
                </span>
                <p>Accurate visitors stats</p>
              </div>
            </Col>

            <Col sm={6} md={3}>
              <div className="text-center">
                <span>
                  <IoRocket />
                </span>
                <p>Fast like rocket (100ms)</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
