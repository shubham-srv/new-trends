import React from "react";
import "./form-input.scss";

const FormInput = ({ changeHandler, label, ...inputProps }) => {
  return (
    <div className="group">
      {label ? (
        <label
          className={`${
            inputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <input className="form-input" onChange={changeHandler} {...inputProps} />
    </div>
  );
};

export default FormInput;
