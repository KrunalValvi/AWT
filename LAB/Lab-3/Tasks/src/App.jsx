import { useState } from "react";
import "./App.css";
import AddTasks from "./AddTasks";
import TaskLists from "./TaskLists";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTasktoArray(uinput) {
    const newTask = {
      id: Date.now(),
      text: uinput,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function updateTask(id, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="app-title">Student Tasks</h2>
        <AddTasks addTasktoArray={addTasktoArray} />
        <TaskLists
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;