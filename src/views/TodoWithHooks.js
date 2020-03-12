import React, { useState } from "react";
import closeIcon from "../assets/close.svg";
import "./TodoWithHooks.css";
const TodoWithHooks = () => {
  const [inputContent, setInputContent] = useState("");
  const [taskList, setTaskList] = useState([{ id: 1, task: "Eat breakfast" }]);

  const addItem = () => {
    setTaskList([...taskList, { id: taskList.length + 1, task: inputContent }]);
  };

  const deleteItem = id => {
    setTaskList(taskList.filter(t => t.id !== id));
  };
  return (
    <div>
      <h1>Todo list</h1>
      <input
        value={inputContent}
        placeholder="Write your task"
        onChange={e => {
          setInputContent(e.target.value);
        }}
      />
      <button onClick={addItem}>+</button>
      {taskList.map(task => (
        <div className="todo-item" key={task.id}>
          <p>{task.task}</p>
          <img
            src={closeIcon}
            onClick={() => deleteItem(task.id)}
            alt="delete item"
            className="x-icon"
          />
        </div>
      ))}
    </div>
  );
};

export default TodoWithHooks;
