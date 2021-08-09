function FinishedTasks({finishedTasks }) {

  return (
    <>
      <ul className="FinishedTaskList">
        {finishedTasks.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </>
  );
}

export default FinishedTasks;
