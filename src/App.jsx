import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    inputValue === ""
      ? null
      : setTask((currentTask) => [
          ...currentTask,
          { id: uuidv4(), title: inputValue },
        ]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    setTask((currentTask) => currentTask.filter((task) => task.id !== id));
  };

  const taskForm = (
    <form onSubmit={addTask}>
      <label htmlFor="taskInput">Add Task</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
  const taskList = task.map((item) => (
    <li key={item.id}>
      <label>
        <input type="checkBox" />
        {item.title}
        <button onClick={() => deleteTask(item.id)}>X</button>
      </label>
    </li>
  ));

  return (
    <>
      <h1>Task Master</h1>
      <div> {taskForm}</div>
      <h2>My to-do-list</h2>
      <ul>{taskList}</ul>
    </>
  );
}

export default App;
