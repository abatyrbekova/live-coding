import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasksList.includes(task.trim())) {
      setTasksList([...tasksList, task.trim()]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedList = tasksList.filter((item, i) => i !== index);

    setTasksList(updatedList);
  };

  const handleDone = (e) => {
    e.target.parentElement.classList.toggle("strike");
  };

  console.log(tasksList);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text">Define your task</span>
          </div>
        <input type="text" className="form-control" onChange={handleChange} required value={task} />
        <button className="btn btn-lg btn-primary">Add</button>
        </div>
      </form>

      <ul>
        {tasksList.map((item, i) => (
          <li key={i} className="list-group-item p-4">
            {item} <button onClick={() => handleDelete(i)} className="btn btn-danger float-end mx-3">delete</button>
            <button onClick={handleDone} className="btn btn-success float-end"> set to done </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
