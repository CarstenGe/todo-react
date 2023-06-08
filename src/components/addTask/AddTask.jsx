import './_addTask.scss';

function AddTask({newTask, setNewTask, addNewTask}) {


	return (
		<div className='add-task'>
			<input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='Add a new task here' />
			<button className='submit' onClick={()=>addNewTask(newTask)}>Add</button>
		</div>
	);
}

export default AddTask;