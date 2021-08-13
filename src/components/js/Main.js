import React from 'react';

import ExercisesList from "../js/ExercisesList";
import FinishedTasks from "../js/FinishedTasks";
import { taskStatus } from '../../constants'

export default function Main ({ tasks, removeTask, handleFinishedTask }) {
  return (
    <main>
      <div className="program__today">
        <ExercisesList
          handleFinishedTask={handleFinishedTask}
          removeTask={removeTask}
          tasks={tasks.filter((task) => task.status === taskStatus.inProgress)}
        />
      </div>
      <div className="program__done">
        <FinishedTasks finishedTasks={tasks.filter((task) => task.status === taskStatus.done)} />
      </div>
    </main>
  )
}