import "../css/ExercisesList.css";

function ExercisesList({ handleFinishedTask, removeTask, tasks }) {
  return (
    <>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <button
              className="task__remove"
              onClick={() => {
                removeTask(index);
              }}
            >
              -
            </button>
            {task.text}
            <button
              className="task__done"
              onClick={() => {
                handleFinishedTask(index);
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
