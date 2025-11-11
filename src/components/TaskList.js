import React from "react";
import { Card, Badge, Button, Form } from "react-bootstrap";
import { Trash2 } from "lucide-react";

function TaskList({ tasks, updateStatus, updateDescription, deleteTask }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  const getCardStyle = (status) => {
    if (status === "Done") {
      return {
        backgroundColor: "#9ae3abff", // hijau lembut
        border: "1px solid #A5D6A7",
        transition: "all 0.3s ease",
      };
    }
    return {
      backgroundColor: "#d0e6f9ff",
      border: "1px solid #eee",
      transition: "all 0.3s ease",
    };
  };

  const statusOptions = ["To Do", "In Progress", "Done"];

  return (
    <div
      className="d-flex gap-3 overflow-auto py-3"
      style={{ whiteSpace: "nowrap" }}
    >
      {tasks.length === 0 && (
        <p className="text-muted text-center w-100">
          No tasks added yet 💤
        </p>
      )}
      {tasks.map((task, index) => (
        <Card
          key={index}
          className={`border-0 shadow-sm px-3 py-2 rounded-4 task-item ${
            task.status === "Done" ? "completed-task" : ""
          }`}
          style={{
            ...getCardStyle(task.status),
            minWidth: "250px",
            flex: "0 0 auto",
          }}
        >
          <Card.Body className="d-flex flex-column align-items-start justify-content-between h-100">
            <div>
              <h6 className="text-secondary mb-1">Task</h6>
              <h5
                className={`fw-semibold mb-2 ${
                  task.status === "Done"
                    ? "text-success text-decoration-line-through"
                    : ""
                }`}
              >
                {task.task}
              </h5>

              {/* === Deskripsi bisa diketik === */}
              <Form.Group className="mb-3 w-100">
                <Form.Label className="text-secondary small">
                  Description
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={task.description || ""}
                  onChange={(e) => updateDescription(index, e.target.value)}
                  placeholder="Tulis deskripsi tugas..."
                  className="rounded-3"
                />
              </Form.Group>
            </div>

            <div className="w-100 mb-2">
              <h6 className="text-secondary mb-1">Priority</h6>
              <Badge bg={getPriorityColor(task.priority)} className="px-3 py-2">
                {task.priority}
              </Badge>
            </div>

            <div className="w-100 mb-2">
              <h6 className="text-secondary mb-1">Status</h6>
              <FormSelectStatus
                value={task.status}
                onChange={(e) => updateStatus(index, e.target.value)}
                options={statusOptions}
              />
            </div>

            <Button
              variant="link"
              className="p-0 text-danger align-self-end mt-auto"
              onClick={() => deleteTask(index)}
            >
              <Trash2 size={18} />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

function FormSelectStatus({ value, onChange, options }) {
  return (
    <select
      className="form-select form-select-sm rounded-pill"
      value={value}
      onChange={onChange}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default TaskList;
