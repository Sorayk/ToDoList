import React, { useState } from "react";

import NewTaskInput from "../src/components/js/NewTaskInput";
import ExercisesList from "../src/components/js/ExercisesList";
import Logo from "../src/components/js/Logo";

import "./App.css";
import "./components/css/resetter.css";
import FinishedTasks from './components/js/FinishedTasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const taskStatus = {
    inProgress: 'in Progress',
    done: 'done'
  };

  const addNewTask = (newTaskText) => {
    setTasks(previousTasks => [...previousTasks, {
      text: newTaskText,
      status: taskStatus.inProgress,
    }]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  const handleFinishedTask = (index) => {
    // take current task from tasks array
    const task = tasks.find((task, k) =>  k === index);
    // change status to 'done'
    task.status = taskStatus.done;

    // push it in finishedTasks array
    setFinishedTasks(previousTasks => [...previousTasks, task]);
    // remove current Task from tasks array
    removeTask(index);
  }

  return (
    <div className="daddy-div">
      <header className="top-section">
        <Logo />
        <NewTaskInput addNewTask={addNewTask} />
      </header>
      <main>
        <div className="program__today">
          <ExercisesList handleFinishedTask={handleFinishedTask} removeTask={removeTask} tasks={tasks}/>
        </div>
        <div className="program__done">
          <FinishedTasks finishedTasks={finishedTasks} />
        </div>
      </main>
      <footer className="footsie"></footer>
    </div>
  );
}

export default App;
