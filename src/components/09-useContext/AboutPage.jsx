import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const AboutPage = () => {
	//const userContext = useContext( UserContext );
	const { user, setUser } = useContext(UserContext);

	console.log(user);

	const handleClick = () => setUser({});

	return (
		<div>
			<h1>About Page</h1>
			<hr />

			<pre>{JSON.stringify(user, null, 3)}</pre>

			<button className='btn btn-warning' onClick={handleClick}>
				Logout
			</button>
		</div>
	);
};
