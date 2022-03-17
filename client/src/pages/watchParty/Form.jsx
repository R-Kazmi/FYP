import React from "react";
import {
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  InputGroup,
  Button,
} from "react-bootstrap";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import history from "../../utils/history";
import { getCookie, setCookie } from "../../utils/cookies";

import "./WatchPartyHome.scss";

export default class HomeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { name: getCookie("username"), roomid: getCookie("roomid") };

    // this.roomidInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.randomizeRoomId = this.randomizeRoomId.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    setCookie("username", this.state.name, 365);
    setCookie("roomid", this.state.roomid, 365);

    history.push("/@" + this.state.roomid);
  }

  randomizeRoomId() {
    const name = uniqueNamesGenerator({
      dictionaries: [colors, adjectives, animals],
      separator: "",
      length: 3,
      style: "capital",
    });
    this.setState({ roomid: name });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formName">
          <FormLabel srOnly>Name</FormLabel>
          <FormControl
            className="mb-2"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </FormGroup>

        <FormGroup controlId="formRoomID">
          <FormLabel srOnly>Room ID</FormLabel>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Room ID"
              name="roomid"
              value={this.state.roomid}
              onChange={this.handleChange}
              required
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={this.randomizeRoomId}>
                Random
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>

        <Button variant="primary" type="submit">
          Enter
        </Button>
      </Form>
    );
  }
}
