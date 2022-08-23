import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Routes>
				{/* <div>

				<div className='container'>
					<Switch> */}
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/about' element={<AboutPage />} />
				<Route exact path='/login' element={<LoginPage />} />

				{/* Se puede poner un componente 404 para las rutas no encontradas */}
				{/* <Route path='/*' element={ <HomeScreen /> } /> */}
				<Route path='/*' element={<Navigate to='/' />} />

				{/* <Redirect to='/' /> */}
				{/* </Switch>
				</div>
			</div> */}
			</Routes>
		</React.Fragment>
	);
};
