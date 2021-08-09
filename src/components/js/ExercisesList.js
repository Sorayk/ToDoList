import "../css/ExercisesList.css";
function ExercisesList({handleFinishedTask, removeTask ,tasks }) {

  return (
    <>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <button className="button__delete"
              onClick={() =>
              {
                removeTask(index)
              }}>
              -
            </button>
            <p className="para">{task.text}</p>
            <button className="button__done"
              onClick={() => {
                handleFinishedTask(index)
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
