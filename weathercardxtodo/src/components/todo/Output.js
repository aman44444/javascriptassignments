import React from 'react'
import TaskItem from './TaskItem';

const TaskOutput = ({taskList, deleteTask, editTask, toggleComplete})=> {
    return (
    <div className='border-black border-2 w-1/2 h-auto  bg-black text-white'>
        <ul>
            {taskList.map(task => (
              <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              toggleComplete={toggleComplete}
            />
            ))}
        </ul>
    </div>
    
  )
}

export default TaskOutput;