import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

export default () => {
  return (
    <Container id="Player">
      <h2>Player</h2>
      {/* <ResponsiveEmbed aspectRatio="16by9"> */}
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          controls
          playing
          light
        />
      {/* </ResponsiveEmbed> */}
    </Container>
  );
};
