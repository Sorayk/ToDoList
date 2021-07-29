import Task from "./Task";

function ExercisesList({ tasks }) {
  return (
    <>
      <ul className="TaskList">
        {tasks.map((task, index) => (
          <Task text={task.text} key={index} />
        ))}
      </ul>
    </>
  );
}

export default ExercisesList;
