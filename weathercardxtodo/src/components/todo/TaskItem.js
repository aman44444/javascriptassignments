import React, { useState } from 'react';

function TaskItem({ task, deleteTask, editTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
