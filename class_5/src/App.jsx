// Imports
import { useState } from "react";
import { Task } from "./Task";

// Style
import "./App.css";

// App
export const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id !== id ? task : (task = { ...task, completed: !task.completed })
      )
    );
  };

  const clearTodoLisT = () => {
    setTodoList([]);
  };

  return (
    <>
      <div className="app">
        <div className="add-task">
          <input
            type="text"
            name="newTask"
            id="newTask"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Adicionar tarefa</button>
          <button onClick={clearTodoLisT}>Limpar Tarefas</button>
        </div>
        <div className="todo-list">
          {todoList.map((task, id) => {
            return (
              <Task
                name={task.name}
                id={task.id}
                key={id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
