import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/08-useReducer/todoReducer';

// Recupero la información del localStorage
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	// Cuando todos cambia, guardo la información en el localStorage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = todoId => {
		if (!todoId) {
			return;
		}

		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggle = todoId => {
		dispatch({
			type: 'toggle',
			payload: todoId,
		});
	};

	const handleAddTodo = newTodo => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};

	return {
		todos,
		handleDelete,
		handleToggle,
		handleAddTodo,
		todosCount: todos.length,
		pendingTodosCount: todos.filter(todo => !todo.done).length,
	};
};
