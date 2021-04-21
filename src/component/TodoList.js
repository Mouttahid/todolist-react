import React, { useState } from "react";
import AddTask from "../todolist/AddTask";
import Tasks from "../todolist/Tasks";
export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleSave = (taskData) => {
    setTasks((prev) => [...prev, taskData]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, checked: !task.checked } : task
    )
    );
 
  };

  return (
    <div className="container py-4 my-4 w-50 bg-dark rounded">
      <AddTask handleSaveText={handleSave} />
      <Tasks tasks={tasks} deleteTask={handleDelete} checkTask={checkTask} />
    </div>
  );
}
