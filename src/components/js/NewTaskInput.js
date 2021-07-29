import React, { useRef } from "react";
import DropDownBtn from "./DropDownBtn";

import "../css/NewTaskInput.css";

function NewTaskInput({ action }) {
  const inputEl = useRef(null);

  const onTyping = (e) => {
    console.log(e);
    const { keyCode, target } = e;
    if (keyCode === 13) {
      action(target.value);
      target.value = "";
    }
  };

  const onClick = () => {
    action(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <div className="text-field">
      <input
        onKeyDown={onTyping}
        // placeholder="Add Exercise"
        type="text"
        ref={inputEl}
        required
      />
      <label>Add Exercise</label>
      <DropDownBtn />
      <button onClick={onClick}>Assign</button>
    </div>
  );
}

export default NewTaskInput;
