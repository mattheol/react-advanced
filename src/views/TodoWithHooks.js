import React, { useState, useEffect, useRef } from "react";
import closeIcon from "../assets/close.svg";
import "./TodoWithHooks.css";
import axios from "axios";
const TodoWithHooks = () => {
  const [inputContent, setInputContent] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Zjesć śniadanie" }
  ]);
  const [tasksMock, setTaskMock] = useState([]);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const handleLayoutBtnClick = () => {
    if (containerRef.current.style.backgroundColor === "black") {
      containerRef.current.style.backgroundColor = "white";
      titleRef.current.style.color = "black";
    } else {
      containerRef.current.style.backgroundColor = "black";
      titleRef.current.style.color = "white";
    }
  };

  useEffect(() => {
    const retrieveData = async () => {
      const response = await axios.get(
        "http://www.mocky.io/v2/5e6ea28f2f00002640a0393f"
      );
      setTaskMock(response.data);
    };
    retrieveData();
  });

  const addItem = () => {
    setTaskList([...taskList, { id: taskList.length + 1, task: inputContent }]);
  };

  const deleteItem = id => {
    setTaskList(taskList.filter(t => t.id !== id));
  };

  return (
    <div ref={containerRef} className="container1">
      <button className="layoutButton" onClick={handleLayoutBtnClick}>
        Click me
      </button>
      <h1 className="title" ref={titleRef}>
        Todo list
      </h1>
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
      {tasksMock.map(task => (
        <div
          className="todo-item"
          style={{ backgroundColor: "green", color: "white" }}
          key={task.id}
        >
          <p>{task.task}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoWithHooks;
