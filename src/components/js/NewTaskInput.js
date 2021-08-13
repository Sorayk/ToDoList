import React, { useRef } from "react";
import DropDownBtn from "./DropDownBtn";

import "../css/NewTaskInput.css";

function NewTaskInput({ addNewTask, onChangeDay }) {
  const textInput = useRef(null);

  const onTyping = (event) => {
    // get the pressed key from the event object
    const keyCode = event.keyCode;

    // if the user presses enter
    if (keyCode === 13) {
     assignText();
    }
  };

  const assignText = () => {
    // add the input text to the array if the input is not empty
    if (textInput.current.value !== '') {
      addNewTask(textInput.current.value);
      // reset the input
      textInput.current.value = '';
    }
  };

  return (
    <div className="text-field">
      <input
        onKeyDown={(event) => onTyping(event)}
        // placeholder="Add Exercise"
        type="text"
        ref={textInput}
        required
      />
      <label>Add Exercise</label>
      <DropDownBtn onChange={onChangeDay} />
      <button onClick={assignText}>Assign</button>
    </div>
  );
}

export default NewTaskInput;
