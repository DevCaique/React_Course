export const Task = (props) => {
  return (
    <div className={props.completed ? "task-completed task-item" : "task-item"}>
      <p>{props.name}</p>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
