import { avatarImages } from "../library/avatar";

export function Message(props) {
  const time = new Date(props.id);

  return (
    <div className="message">
      <img
        src={avatarImages[props.avatarIndex]}
        alt={props.author}
        width={100}
        height={100}
      />
      <div className="message-author">{props.author}</div>
      <div className="message-text">{props.text}</div>
      <div className="message-id">
        Sent {time.getHours()}:{time.getMinutes()}
      </div>
    </div>
  );
}
