import "../css/ExercisesList.css";

function FinishedTasks({ finishedTasks }) {
  return (
    <>
    <h1 className="title">Finished Tasks</h1>
      <ul className="task__finished-list">
        {finishedTasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </>
  );
}

export default FinishedTasks;
