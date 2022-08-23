import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
	//const userContext = useContext( UserContext );
	const { user } = useContext(UserContext);

	console.log(user);

	return (
		<div>
			<h1>Home Page</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>
		</div>
	);
};
