import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
	const {
		todos,
		handleAddTodo,
		handleDelete,
		handleToggle,
		todosCount,
		pendingTodosCount,
	} = useTodos();

	return (
		<div>
			<h1>
				Todos: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>

				<div className='col-5'>
					<TodoAdd handleAddTodo={handleAddTodo} />
				</div>
			</div>
		</div>
	);
};
