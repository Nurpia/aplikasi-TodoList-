import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Plus } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Tambah task baru
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Update status (To Do / In Progress / Done)
  const updateStatus = (index, status) => {
    const updated = [...tasks];
    updated[index].status = status;
    setTasks(updated);
  };

  // Update deskripsi (biar bisa diketik langsung)
  const updateDescription = (index, newDesc) => {
    const updated = [...tasks];
    updated[index].description = newDesc;
    setTasks(updated);
  };

  // Hapus task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="task-container shadow-lg p-4 rounded-4 bg-white">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark">Task List</h2>
          <button
            className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
            data-bs-toggle="collapse"
            data-bs-target="#taskForm"
          >
            <Plus size={18} /> Add Task
          </button>
        </div>

        {/* Form tambah task */}
        <div className="collapse mb-3" id="taskForm">
          <TaskForm addTask={addTask} />
        </div>

        {/* Daftar task */}
        <TaskList
          tasks={tasks}
          updateStatus={updateStatus}
          updateDescription={updateDescription}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
