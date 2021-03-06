import "../css/ExercisesList.css";

function ExercisesList({ handleFinishedTask, removeTask, tasks }) {
  return (
    <>
       <h1 className="title">To Do</h1>
      <ul className="task__list">
        {tasks.map((task, index) => (
          <li key={index}>
            <button
              className="task__remove"
              onClick={() => {
                removeTask(task.id);
              }}
            >
              -
            </button>
            {task.text}
            <button
              className="task__done"
              onClick={() => {
                handleFinishedTask(task.id);
              }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExercisesList;
