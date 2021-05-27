import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia al userContext
    const { setUser } = useContext( UserContext );

    // 2. setUser
     const data = {
        id: 1234,
        name: 'User 1',
        email: 'user1@mail.com',
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => setUser(data) } 
            >
                Login
            </button>
        </div>
    )
}
