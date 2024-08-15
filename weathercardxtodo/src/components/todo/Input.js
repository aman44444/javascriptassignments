import React, { useState } from 'react'

const TaskInput = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };
  
  return (
    <div className='w-1/2'>
        <div className='border-black border-2 flex justify-center'>
            <input className='border-2 border-black' type='text' placeholder='add task...' vlaue={task} onChange={(e) => {
              setTask(e.target.value) 
            }}/>
            <button onClick={handleAdd} className='bg-black text-white'>ADD</button>
        </div>
    </div>
  )
}

export default TaskInput;