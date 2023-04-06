import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";
import "../styles/AvatarFormField.css";

export function AvatarFormField(props) {
  const [index, setIndex] = useState(0);

  props.onChange(index);

  function handlePreviousClick() {
    if (index <= 0) {
      setIndex(avatarImages.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (index >= avatarImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <FormField>
      <div className="avatars">
        <div>
          <img
            className="img-avatar-select"
            src={avatarImages[index]}
            alt={index}
          />
        </div>
        <button
          className="button-avatar-select"
          type="button"
          onClick={handlePreviousClick}
        >
          Previous
        </button>
        <button
          className="button-avatar-select"
          type="button"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </FormField>
  );
}
