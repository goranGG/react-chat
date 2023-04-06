import "../styles/InputFormField.css";
import { FormField } from "./FormField";

export function InputFormField(props) {
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <FormField>
      <div className="form-signin-username">
        <label>{props.label}</label>
        <br />
        <input
          className="form-signin-input"
          type={props.type}
          onChange={handleChange}
          value={props.value}
        />
      </div>
    </FormField>
  );
}
