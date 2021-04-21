import React, { useRef, useState } from "react";

export default function AddTask({ handleSaveText }) {
  const [error, setError] = useState(false);
  const taskRef = useRef();
  const [id, setId] = useState(0);

  const handleSave = (e) => {
    e.preventDefault();
    setError(false);

    if (taskRef.current.value && taskRef.current.value.trim()) {
      setId(id + 1);
      handleSaveText({ id: id, text: taskRef.current.value,checked: false });
      e.target.reset();
    } else setError(true);
  };

  return (
    <form onSubmit={handleSave} className="text-white text-center mb-4">
      <div className="mb-3">
        <label className="form-label">TODO LIST</label>
        <input
          ref={taskRef}
          defaultValue=""
          type="text"
          className="form-control"
          id="task-name"
          placeholder="Go Shopping..."
        />
        <div
          role="alert"
          className={`alert alert-danger ${error ? "d-block" : "d-none"}`}
        >
          Task Text is required
        </div>
      </div>
      <button className="btn btn-outline-primary">Save</button>
    </form>
  );
}
