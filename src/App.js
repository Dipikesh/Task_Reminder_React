import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Dipikesh",
      age: 19,
      status: true,
    },
    {
      id: 2,
      name: "Dipp",
      age: 14,
      status: false,
    },
    {
      id: 3,
      name: "Anurag",
      age: 126,
      status: true,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState("true");

  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Deleting task", id);
  };

  const onToggle = (id) => {
    console.log(id);
  };

  const onAddTask = (task) => {
    const id = Math.floor(Math.random() * 1000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };
  return (
    <div className="container">
      <Header
        title={"Email Reminder"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAddTask} />}
      {tasks.length > 0 ? (
        <Tasks onDelete={DeleteTask} tasks={tasks} onToggle={onToggle} />
      ) : (
        "No Reminder To Show"
      )}
    </div>
  );
}

export default App;
