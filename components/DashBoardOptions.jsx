import React from 'react'
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function DashBoardOptions() {
  return (
    <Container className='dashboard_nav'>
        <Row>
            <Col sm={2} className="nav__link">
                <Link href="/">
                    Links
                </Link>
            </Col>
            <Col sm={2} className="nav__link">
                <Link href="Design">
                    Design
                </Link>
            </Col>
            <Col sm={2} className="nav__link">
                Stats
            </Col>
        </Row>
    </Container>
  )
}
