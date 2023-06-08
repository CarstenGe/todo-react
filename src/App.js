import { useState } from 'react';
import './App.scss';
import AddTask from './components/addTask/AddTask';
import Task from './components/task/Task';
import dbTasks from './db-tasks';

function App() {
  const [tasks, setTasks] = useState(dbTasks);
	const [newTask, setNewTask] = useState('');

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
	}
	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task)=>task.id !== taskId))
	}
  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: tasks.length + 1,
        name: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  };

  return (
    
    <div className="App">

      <div className="task-container">
        
        <Task 
          tasks={tasks} 
          toggleTaskStatus={toggleTaskStatus} 
          deleteTask={deleteTask} 
        />

        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addNewTask={addNewTask}
        />

      </div>

    </div>
  );
}

export default App;
