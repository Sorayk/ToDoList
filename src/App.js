import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { v4 as uuidv4 } from 'uuid';

import NewTaskInput from "../src/components/js/NewTaskInput";
import Logo from "../src/components/js/Logo";
import Background from "./components/js/Background";
import Main from './components/js/Main';
import { taskStatus, MONDAY, TUESDAY } from './constants'

import "./App.css";
import "./components/css/resetter.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskDay, setNewTaskDay] = useState(MONDAY)

  const addNewTask = (newTaskText) => {
    const newTask = {
      id: uuidv4(),
      text: newTaskText,
      status: taskStatus.inProgress,
      day: newTaskDay
    }
    console.log(newTask)
    setTasks((previousTasks) => [
      ...previousTasks,
      newTask
    ]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks);
  };

  const handleFinishedTask = (id) => {
    // take current task from tasks array
    const newTasks = tasks.map((task) => {
      return {
        ...task,
        status: task.id === id ? taskStatus.done : task.status
      }
    })
    setTasks(newTasks)
  };

  const onChangeNewTaskDay = (day) => {
    setNewTaskDay(day)
  } 

  console.log(tasks)
  return (
    <div className="daddy-div">
      <header className="top-section">
        <Logo />
        <NewTaskInput
          addNewTask={addNewTask}
          onChangeDay={onChangeNewTaskDay}
        />
      </header>
        <Tabs>
          <TabList>
            <Tab>Monday</Tab>
            <Tab>Tuesday</Tab>
          </TabList>

          <TabPanel>
            <Main
              removeTask={removeTask}
              handleFinishedTask={handleFinishedTask}
              tasks={tasks.filter((task) => task.day === MONDAY)}
            />
          </TabPanel>
          <TabPanel>
            <Main
              removeTask={removeTask}
              handleFinishedTask={handleFinishedTask}
              tasks={tasks.filter((task) => task.day === TUESDAY)}
            />
          </TabPanel>
        </Tabs>
 
      </div>
  );
}

export default App;
