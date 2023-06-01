import React, { useState } from 'react'
import DashBoardOptions from "../../components/DashBoardOptions"
import Nav from '../../components/Nav'
import { Col, Container, Row } from "react-bootstrap";
import LinkList from '../../components/LinkList';
import Link from 'next/link';
import LinkForm from '../../components/LinkForm';
import Modal from '../../components/Modal';

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyn8jGbP5zawOtee" }).base(
  "appoJJtmyj0A524LY"
);
export default function links() {
  const [linkBtState, setLinkBtState] = useState(false);
  const linkbtpress = () =>{
    console.log(true);
    setLinkBtState(true);
  }
  const closefn = () => {
    console.log(false);
    setLinkBtState(false);
  }
  const userId = "gulzari";
  // fetch('https://api.airtable.com/v0/appoJJtmyj0A524LY/user_link_data?api_key=keyn8jGbP5zawOtee')
  //   .then((resp) => resp.json())
  //   .then(data => {
  //      console.log(data);
  //   }).catch(err => {
  //     // Error :(
  //   });
    console.log(base("one-link_data").select({
      filterByFormula: '{ID} = "userID"',
      }))
  const filteredExpenses = [
    {
      "id": 1,
      "title": "Data Scientist",
    },
    {
      "id": 2,
      "title": "twitter",
    },
    {
      "id": 3,
      "title": "LinkedIN",
    },
    {
      "id": 4,
      "title": "Instagram",
    }
  ]
  return (
    <>
      <div className="bg"></div>
      {linkBtState === true && <Modal onClose={closefn}><LinkForm onClose={closefn}/></Modal>}
      <Nav isLogin={true} />
      <Container fluid className="cont py-[50px] dashboard">
        <Row>
          <Col lg={4} className="mobilePreview">
            <div className='dashboard__mobilePreview'>
              <iframe src="https://bio.link/kk99351?preview=1">
              </iframe>
            </div>
          </Col>
          <Col lg={8}>
            <DashBoardOptions />
            <button className="btns add_header_bt">
              + Add header
            </button>
            <button className="btns" onClick={linkbtpress}>
              + Add links
            </button>
            <LinkList items={filteredExpenses} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
