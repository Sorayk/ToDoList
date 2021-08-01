
function ExercisesList({handleFinishedTask, removeTask ,tasks }) {

  return (
    <>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <li key={index}>
            <button onClick={() => {removeTask(index)}}>-</button>
            {task.text}
            <button onClick={() => {handleFinishedTask(index)}}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ExercisesList;
