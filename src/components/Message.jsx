import { useContext } from "react";
import { avatarImages } from "../library/avatar";
import "../styles/Message.css";
import { AppContext } from "../contexts/AppContext";

export function Message(props) {
  const time = new Date(props.id);
  const context = useContext(AppContext);

  return (
    <div
      className={
        "margin-top-10 " +
        (props.author === context.username
          ? "message-author-me"
          : "message-author-others")
      }
    >
      <div className="message-wrap">
        <div className="message-author">
          {props.author} <br /> Sent {time.getHours()}:{time.getMinutes()}{" "}
        </div>
        <img
          className="message-avatar"
          src={avatarImages[props.avatarIndex]}
          alt={props.author}
          width={100}
          height={100}
        />
        <div className="message-text">{props.text}</div>
        <div className="message-id"></div>
      </div>
    </div>
  );
}
