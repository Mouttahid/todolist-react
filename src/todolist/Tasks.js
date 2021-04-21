import React from "react";
import Task from "./Task";

export default function Tasks({tasks,deleteTask,checkTask}) {

  return (
    <div className="tasks">
      {tasks.length > 0 && tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={()=>deleteTask(task.id)} handleClick={()=>checkTask(task.id)}/>
      ))}
    </div>
  );
}
