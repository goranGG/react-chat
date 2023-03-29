import { avatarImages } from "../library/avatar";

export function Message(props) {
  // console.log("MESSAGE::::");
  // console.log(props);
  const time = new Date(props.id);
  // console.log("TIME");
  // console.log(time);

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
