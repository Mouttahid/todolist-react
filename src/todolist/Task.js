import React from "react";

export default function Task({ task, deleteTask, handleClick }) {
  return (
    <div className="card mb-3">
      <div className="p-2 d-flex flex-row justify-content-between align-items-center">
        <div>
          <input
            type="checkbox"
            className="input mr-2"
            onClick={()=>handleClick(task.id)}
          />
          <span className={`fs-5 text-capitalize ${task.checked ? "text-decoration-line-through" : ""}`}>{task.text}</span>
        </div>
        <span className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          Delete
        </span>
      </div>
    </div>
  );
}
