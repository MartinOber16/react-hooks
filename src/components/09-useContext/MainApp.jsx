import React from 'react';
import { AppRouter } from './AppRouter';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
	return (
		<UserProvider>
			<AppRouter />
		</UserProvider>
	);
};
