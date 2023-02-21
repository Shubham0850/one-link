import React, { useReducer, useState } from "react";
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
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyn8jGbP5zawOtee" }).base(
  "appoJJtmyj0A524LY"
);

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function form() {
  const [formData, setFormData] = useReducer(formReducer, {userID: "gulzari"});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    base("one-link_data").create(
      [
        {
          fields: formData,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
    setSubmitting(true);
    window.alert("Sent Succesfully");
  };

  setTimeout(() => {
    setSubmitting(false);
  }, 3000);

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="formDiv userid_Field">
            <label>
              <Row>
                <Col className="flex items-center justify-center">
                  <p className="text-xl m-0">Gulzari</p>
                  <BsFillPatchCheckFill className="ml-2 text-blue-500 text-xl" />
                </Col>
              </Row>
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Twitter</Col>
                <Col>
                  <a
                    href="https://twitter.com/"
                    title="TWitter"
                    target="_blank"
                    className="text-[#00acee]"
                  >
                    <span className="cursor-pointer text-3xl">
                      <BsTwitter />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="twitter" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Instagram</Col>
                <Col>
                  <a
                    href="https://instagram.com/"
                    title="Instagram"
                    target="_blank"
                    className="text-[#d62976]"
                  >
                    <span className="cursor-pointer text-3xl">
                      <AiFillInstagram />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="instagram" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>LinkeldIN</Col>
                <Col>
                  <a
                    href="https://www.linkedin.com//"
                    title="LinkedIN"
                    target="_blank"
                    className="text-[#0072b1]"
                  >
                    <span className="cursor-pointer text-3xl">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="linkedIN" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Youtube</Col>
                <Col>
                  <a
                    href="https://www.youtube.com//"
                    title="Youtube"
                    target="_blank"
                    className="text-[#c4302b]"
                  >
                    <span className="cursor-pointer text-3xl">
                      <BsYoutube />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="youtube" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Github</Col>
                <Col>
                  <a
                    href="https://github.com/"
                    title="Github"
                    target="_blank"
                    className="text-dark"
                  >
                    <span className="cursor-pointer text-3xl">
                      <BsGithub />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="github" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Telegram</Col>
                <Col>
                  <a
                    href="https://www.telegram.com//"
                    title="Telegram"
                    target="_blank"
                    className="text-[#0088cc]"
                  >
                    <span className="cursor-pointer text-3xl">
                      <FaTelegramPlane />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="telegram" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Calandly</Col>
                <Col>
                  <a
                    href="#"
                    title="Medium"
                    target="_blank"
                    className="text-dark"
                  >
                    <span className="cursor-pointer text-3xl">
                      <BsMedium />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="calandly" onChange={setFormData} />
            </label>
          </div>
          <div className="formDiv">
            <label>
              <Row>
                <Col>Website</Col>
                <Col>
                  <a
                    href="#"
                    target="_blank"
                    title="Website"
                    className="text-dark"
                  >
                    <span className="cursor-pointer text-3xl">
                      <MdWeb />
                    </span>
                  </a>
                </Col>
              </Row>
              <input name="website" onChange={setFormData} />
            </label>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default form;
