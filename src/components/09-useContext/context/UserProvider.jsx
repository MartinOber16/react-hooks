import React, { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     id: 1234,
//     name: 'User 1',
//     email: 'user1@mail.com',
// }

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
