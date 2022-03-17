import React from "react";
import {
  Container,
  ButtonToolbar,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaPlay, FaPause, FaToggleOn, FaToggleOff, FaMehRollingEyes, FaSync, FaLink, FaExchangeAlt } from 'react-icons/fa'


let isPlaying = false;

export default () => {
  return (
    <Container id="Controls">
      <h2>Controls</h2>
      <ButtonToolbar>
        <ButtonGroup className="mr-2">
          <Button>
            <FaPlay /> Play
          </Button>
          <Button>
            <FaPause /> Pause
          </Button>
          <Button>
            { isPlaying? <FaToggleOn/> : <FaToggleOff/> } {" "}
            Toggle
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button>
            <FaSync /> Sync
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mr-2">
          <Button>
            <FaMehRollingEyes /> Rick-roll
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar className="mt-2">
        <InputGroup className="mr-2">
          <InputGroup.Prepend>
            <InputGroup.Text id="btnGroupAddon">
              <FaLink />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" placeholder="Video URL" />
        </InputGroup>
        <ButtonGroup className="mr-2">
          <Button>
            <FaExchangeAlt /> Change video
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
};
