import { useContext, useEffect } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";

export function ChatPage() {
  const [messages, setMessages] = useState([]);
  const context = useContext(AppContext);
  const [client, setClient] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const [ready, setReady] = useState(false);

  function handleSubmit(message) {
    // send message
    client.publish({
      room: "AlgebraKanal",
      message: message,
    });
  }

  function handleSignOut() {
    context.setUsername("");
  }

  const messageComponents = messages.map((message) => {
    // console.log("MAPPING");
    // console.log(message);
    return (
      <Message
        key={message.id}
        id={message.id}
        avatarIndex={message.author.avatarIndex}
        author={message.author.username}
        text={message.text}
      />
    );
  });

  useEffect(() => {
    const drone = new window.Scaledrone("1Vkr1vH0cEIgrnjr");

    drone.on("open", (error) => {
      if (error) {
        console.log(error);
      } else {
        const room = drone.subscribe("AlgebraKanal");
        // save Scaledrone connection to state so app can use it
        setClient(drone);
        setChatRoom(room);
      }
    });
    console.log(drone);
  }, []);

  useEffect(() => {
    if (chatRoom !== null && !ready) {
      chatRoom.on("data", (data) => {
        setMessages((messages) => {
          return [...messages, data];
        });
      });
      setReady(true);
    }
  }, [chatRoom, ready]);

  if (!context.isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      Chat page
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
      <div className="message-list">{messageComponents}</div>
      <MessageForm
        onSubmit={handleSubmit}
        username={context.username}
        avatarIndex={context.avatarIndex}
      />
    </div>
  );
}
