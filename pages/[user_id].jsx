import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsFillPatchCheckFill,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaShareAlt,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsGithub, BsSpotify, BsMedium } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

function Card() {
  return (
    <a href="#" target="_blank" className="a text-dark">
      <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <img
          src="https://assets.website-files.com/634681057b887c6f4830fae2/6367ddb571d5e9c24db2dd2d_6259f6e95f20206cf54f2154_Calendly-Alternatives.png"
          alt="banner"
          className="w-full max-h-[300px]"
        />
        <div className="p-3">
          <h3 className="h3">Calandly - Lets have a chat</h3>
        </div>
      </div>
    </a>
  );
}

function UserId() {
  return (
    <div className="user-id">
      <div className="bg"></div>

      <div className="user-id__bg">
        <img
          src="https://cdn.pixabay.com/photo/2018/04/15/20/50/cube-3322835_960_720.jpg"
          alt="bg"
          className="bg-img"
        />

        <div className="absolute top-2 right-3 backdrop-blur-md p-3 cursor-pointer text-2xl border rounded border-gray-500 text-white">
          <FaShareAlt />
        </div>

        <div className="flex items-end -mt-[75px] max-w-[1350px] mx-auto space-x-5">
          <div>
            <img src="/profile.png" alt="profile" width={"150px"} />
          </div>

          <Row className="">
            <Col className="p-3 flex items-center justify-center">
              <p className="text-xl m-0">Gulzari</p>
              <BsFillPatchCheckFill className="ml-2 text-blue-500 text-xl" />
            </Col>
            <Col className="p-3">
              <a
                href="#"
                title="TWitter"
                target="_blank"
                className="text-[#00acee]"
              >
                <span className="cursor-pointer text-3xl">
                  <BsTwitter />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a
                href="#"
                title="Instagram"
                target="_blank"
                className="text-[#d62976]"
              >
                <span className="cursor-pointer text-3xl">
                  <AiFillInstagram />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a
                href="#"
                title="LinkedIN"
                target="_blank"
                className="text-[#0072b1]"
              >
                <span className="cursor-pointer text-3xl">
                  <FaLinkedinIn />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a
                href="#"
                title="YouTube"
                target="_blank"
                className="text-[#c4302b]"
              >
                <span className="cursor-pointer text-3xl">
                  <BsYoutube />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a href="#" title="Github" target="_blank" className="text-dark">
                <span className="cursor-pointer text-3xl">
                  <BsGithub />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a
                href="#"
                title="Spotify"
                target="_blank"
                className="text-[#1DB954]"
              >
                <span className="cursor-pointer text-3xl">
                  <BsSpotify />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a href="#" title="Tiktok" target="_blank" className="text-dark">
                <span className="cursor-pointer text-3xl">
                  <FaTiktok />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a href="#" target="_blank" title="Website" className="text-dark">
                <span className="cursor-pointer text-3xl">
                  <MdWeb />
                </span>
              </a>
            </Col>

            <Col className="p-3">
              <a
                href="#"
                title="Telegram"
                target="_blank"
                className="text-[#0088cc]"
              >
                <span className="cursor-pointer text-3xl">
                  <FaTelegramPlane />
                </span>
              </a>
            </Col>
            <Col className="p-3">
              <a href="#" title="Medium" target="_blank" className="text-dark">
                <span className="cursor-pointer text-3xl">
                  <BsMedium />
                </span>
              </a>
            </Col>
          </Row>
        </div>

        <Container fluid className="cont py-[50px]">
          <Row>
            <Col sm={4}>
              <Card />
            </Col>
            <Col sm={4}>
              <Card />
            </Col>
            <Col sm={4}>
              <Card />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserId;
