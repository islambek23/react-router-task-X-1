import React, { useState } from 'react'

const TaskList = (props) => {
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      {props.taskList.map((el) => (
        <div>
          {el.title}
          {el.status === 'new' && (
            <button type="button" onClick={() => props.updateStatus(el.taskId, 'in progress')}>
              In progress
            </button>
          )}
          {el.status === 'in progress' && (
            <div className="inline">
              <button type="button">Block</button>
              <button type="button">Done</button>
            </div>
          )}
        </div>
      ))}
      <input type="text" className="bg-gray-300" onChange={(e) => setNewTask(e.target.value)} />
      <button type="button" onClick={() => props.addTask(newTask)}>
        Go
      </button>
    </div>
  )
}

export default TaskList
