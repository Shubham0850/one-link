import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Divider from "./Divider";

function Card() {
  return (
    <div className="relative cursor-pointer">
      <img
        src="https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121"
        alt="profile image"
        width={"full"}
      />
      <div className="p-2 backdrop-blur-sm flex items-center justify-center absolute bottom-0 left-0 w-full sm-border">
        <p className="p text-white m-0">0xgulzari</p>
      </div>
    </div>
  );
}

export default function UsedBy() {
  const userData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6,
  ];
  return (
    <div>
      <Divider />
      <div className="used-by">
        <Container fluid className="cont">
          <div className="text-center">
            <h1 className="text-5xl">
              Trusted by <b>10M+</b>
            </h1>
            <h1 className="text-4xl">Developers</h1>
          </div>
        </Container>

        <div className="w-full flex mt-[100px] overflow-hidden">
          <Row>
            {userData.map((user, index) => {
              return (
                <Col key={index} sm={1} className="p-0 ">
                  <Card />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}
