import './_task.scss';

function Task({tasks, toggleTaskStatus, deleteTask}) {

	
	return (
		<div className='tasks'>
			{tasks.length ? 
				tasks.map((task) => (
					<div key={task.id} className='task'>
						<div className={`desc ${task.completed ? 'completed' : ''}`}>{task.name}</div>
						<div className="actions">
							<button className='toggle-action' onClick={()=>toggleTaskStatus(task.id)}>
								{task.completed ? 'Mark as not completed' : 'Mark as completed'}
							</button>
							<button className='delete-button' onClick={()=>deleteTask(task.id)}>Delete task</button>
						</div>
					</div>
				))
			:
				<p className='no-tasks'>All tasks have been completed! Good for you.</p>
			}
		</div>
	);
}

export default Task;