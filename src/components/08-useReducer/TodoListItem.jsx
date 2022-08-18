import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
	return (
		<li
			key={todo.id}
			className='list-group-item d-flex justify-content-between'>
			<span
				className={`align-self-center ${todo.done && 'complete'}`}
				onClick={() => handleToggle(todo.id)}>
				{todo.desc}
			</span>
			<button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
				Borrar
			</button>
		</li>
	);
};

TodoListItem.displayName = 'TodoListItem';
