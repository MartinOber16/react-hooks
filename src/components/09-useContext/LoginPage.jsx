import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
	// 1. Obtener la referencia al userContext
	const { user, setUser } = useContext(UserContext);

	// 2. setUser
	const data = {
		id: 1234,
		name: 'User 1',
		email: 'user1@mail.com',
	};

	return (
		<div>
			<h1>Login Page</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>
			<button className='btn btn-primary' onClick={() => setUser(data)}>
				Login
			</button>
		</div>
	);
};
