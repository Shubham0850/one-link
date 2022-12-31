import React from "react";
import { Container } from "react-bootstrap";
import Divider from "./Divider";

export default function DataPrivacy() {
  return (
    <div>
      <Divider />
      <Container fluid className="cont p-[100px]">
        <div>
          <h1 className="text-5xl leading-[75px]">
            Data Policy.
            <br />
            <span className="opacity-40">
              You control your <b>data</b>. You can delete profile data from
              your account anytime. One.link has no ads. One.link will{" "}
              <b>not sell</b> your data. Your data is <b>securely</b> stored on
              <b>blockchain</b>.
            </span>
          </h1>
        </div>
      </Container>
    </div>
  );
}
