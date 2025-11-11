import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ task, priority, status: "To Do" });
    setTask("");
    setPriority("Medium");
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3 bg-light rounded-3 shadow-sm">
      <Row className="align-items-center">
        <Col md={6} className="mb-2 mb-md-0">
          <Form.Control
            type="text"
            placeholder="Enter new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Col>
        <Col md={3} className="mb-2 mb-md-0">
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Button
            type="submit"
            className="w-100 rounded-pill"
            style={{ backgroundColor: "#6C63FF", border: "none" }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskForm;
