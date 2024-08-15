import React, { useEffect, useState } from 'react'
import TaskInput from './Input'
import TaskOutput from './Output'

export const Task = () => {
const [taskList, setTaskList] = useState([])


useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem('taskList'));
  if (savedTodos && Array.isArray(savedTodos)) {
    setTaskList(savedTodos);
  }
}, []);


useEffect(() => {
  if (taskList.length > 0) {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }
}, [taskList]);


const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
}

  const deleteTask = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  };

  const editTask = (id, newText) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTaskList(updatedTaskList);
  };

  const toggleComplete = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className='w-full h-4/5 flex justify-center items-center flex-col'>
       <TaskInput addTask={addTask} />
       <TaskOutput 
       taskList={taskList}
       deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
       />
    </div>
  )
}
