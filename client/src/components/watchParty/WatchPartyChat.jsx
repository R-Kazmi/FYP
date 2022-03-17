import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Message from "./Message";
import Input from "./Input";
import { socket } from "../../utils/socket";
import { sanitize } from "../../utils/sanitize";

import "./WatchPartyChat.scss";

export default () => {
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", ({ user, text }) => {
      setMessages((messages) => [
        ...messages,
        {
          avatar: "https://maik.dev/assets/images/logo.svg",
          alt: "Avatar",
          title: sanitize(user),
          subtitle: sanitize(text),
          date: new Date(),
          unread: 0,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current.parentElement.scrollTo({
      left: 0,
      top: messagesEndRef.current.parentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Container id="Chat">
      <h2>Chat</h2>
      <Container className="chat-view p-0 d-flex flex-column" fluid>
        <Container className="chat-messages p-0 flex-fill">
          {messages.map((msg, idx) => (
            <Message
              key={idx}
              author={msg.title}
              text={msg.subtitle}
              date={msg.date}
            />
          ))}
          <div ref={messagesEndRef} />
        </Container>
        <Input />
      </Container>
    </Container>
  );
};
