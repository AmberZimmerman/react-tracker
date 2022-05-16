import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "oneeeee",
      day: "Sunday",
      reminder: false,
    },
    {
      id: 2,
      text: "twooooo",
      day: "Monday",
      reminder: false,
    },
    {
      id: 3,
      text: "threee",
      day: "Tuesday",
      reminder: false,
    },
    {
      id: 4,
      text: "fourrr",
      day: "Wednesday",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* if showaddtask is true, show add task */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
