import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		// <nav>
		//     <ul>
		//         <li> <Link to="/">Home</Link> </li>
		//         <li> <Link to="/about">About</Link> </li>
		//         <li> <Link to="/login">Login</Link> </li>
		//     </ul>
		// </nav>
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					useContext
				</Link>

				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<ul className='navbar-nav'>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to='/'>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to='/about'>
							About
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : ''}`
							}
							to='/login'>
							Login
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};
