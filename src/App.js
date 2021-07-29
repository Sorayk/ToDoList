import React, { useState } from "react";

import NewTaskInput from "../src/components/js/NewTaskInput";
import ExercisesList from "../src/components/js/ExercisesList";
import Logo from "../src/components/js/Logo";
import DropDownBtn from "./components/js/DropDownBtn";

import "./App.css";
import "./components/css/resetter.css";




function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTaskText) => {
    const newTasks = [
      ...tasks,
      {
        text: newTaskText,
        status: "in progress",
      },
    ];

    setTasks(newTasks);
  };

  return (
    <div className="daddy-div">
      <header className="top-section">
        <Logo />

        <NewTaskInput action={addNewTask} />

        <DropDownBtn />

      </header>
      <main>
        <div className="program__today">
          <ExercisesList tasks={tasks} />
        </div>
        <div className="program__done"></div>
      </main>
      <footer className="footsie"></footer>
    </div>
  );
}

export default App;
