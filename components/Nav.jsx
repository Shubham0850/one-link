import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connectMeta } from "../utils/walletConnect";

export default function Nav(props) {
  const [wallet, setWallet] = useState(null);

  // new useEffect:
  useEffect(() => {
    const address = localStorage.getItem("address");

    if (address) {
      const addressString = `${address.slice(0, 5)}...${address.slice(-4)}`;
      setWallet(addressString);
    }
  }, []);

  return (
    <div className={`nav ${props.isLogin && "navLogin"}`}>
      <Container fluid >
        <Row className="nav__row">
          <Col md={3} className="nav__logo">
            <Link href="/">
              <img src="/big-logo.png" alt="logo" />
            </Link>
          </Col>

          <Col sm={0} md={6} className="nav__links hide-on-phone">
            <span className="nav__link">
              <Link href="/roadmap">Roadmap</Link>
            </span>

            <span className="nav__link">
              <Link href="/about-us">About Us</Link>
            </span>
          </Col>

          <Col md={3} className="nav__cta">
            {wallet ? (
              <button className="btns--connected btns">
                {wallet}
              </button>
            ) : (
              <button className="btns" onClick={connectMeta}>
                Connect wallet
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
