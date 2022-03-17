import React, { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { socket } from "../../utils/socket";
import { sanitize } from "../../utils/sanitize";

import "./Online.scss";

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("usersUpdated", ({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <Container id="Online">
      <h2>Online</h2>
      <ListGroup className="online-list">
        {users.map((usr, idx) => (
          <ListGroup.Item key={idx}>
            <FaUser className="mr-2" />{" "}
            {sanitize(usr.name)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
