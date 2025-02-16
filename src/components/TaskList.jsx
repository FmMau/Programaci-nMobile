import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="bg-white w-full">
      <h2 className="text-xl font-bold mb-4 text-center">My Task List</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={addTask}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>
      <ul className="w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center p-2 border rounded mb-2"
          >
            <input type="checkbox" className="mr-2" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}