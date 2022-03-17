import React from "react";
import { Container } from "react-bootstrap";
import Form from "./Form";
import "./WatchPartyHome.scss";

export default () => {
  return (
    <Container id="Home">
      <Container className="lander">
        <h1>Watch-Together</h1>
        <p>
          A website to watch a youtube video together with someone who is not
          directly next to you!
        </p>
        <Container fluid className="mt-4">
          <Form />
        </Container>
      </Container>
    </Container>
  );
};
