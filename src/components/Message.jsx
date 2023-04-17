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
      <div
        className={
          "message-wrap " +
          (props.author === context.username
            ? "message-wrap-me"
            : "message-wrap-others")
        }
      >
        <div className="message-grid-1">{props.text}</div>
        <div className="message-grid-2">
          <img
            className="message-avatar"
            src={avatarImages[props.avatarIndex]}
            alt={props.author}
            width={100}
            height={100}
          />
          <div>{props.author}</div>
        </div>
        <div className="message-grid-3">
          <hr />
          Sent {time.getHours()}:{time.getMinutes()}{" "}
          <hr />
        </div>
        <div className="message-id"></div>
      </div>
    </div>
  );
}
