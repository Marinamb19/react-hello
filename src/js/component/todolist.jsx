import React, { useState } from 'react'
import { CiTrash } from "react-icons/ci";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["hacer la compra"]);
  const [newTask, setNewTask] = useState('');
  const [isHovered, setIsHovered] = useState(new Array(tasks.length).fill(false));

  const handleAddTask = (event) => {
    if (event.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const handleMouseEnter = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = true;
    setIsHovered(newHovered);
  };
  const handleMouseLeave = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = false;
    setIsHovered(newHovered);
  };

  return (
    <div className='container'>
      <h1>To do List</h1>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onKeyPress={handleAddTask}
      />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}>
            {task}
            {isHovered[index] && (
              <CiTrash
                className="trash"
                onClick={() => handleDeleteTask(index)}
              />
            )}

          </li>
        ))}
      </ul>

    </div>
  )
}


export default ToDoList