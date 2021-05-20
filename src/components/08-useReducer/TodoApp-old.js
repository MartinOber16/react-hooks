import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }]

// Recupero la información del localStorage
const init = () => {
//    return [{
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//     }];

    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const TodoApp = () => {

    //const [ todos, dispatch ] = useReducer( todoReducer, initialState );
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    // Cuando todos cambia, guardo la información en el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action );
        reset();

    }

    const handleDelete = ( todoId ) => {

        if( !todoId ) {
            return;
        }

        const action = {
            type: 'delete',
            payload: todoId,
        }

        dispatch( action );
    }

    const handleToggle = ( todoId ) => {

        dispatch( { 
            type: 'toggle',
            payload: todoId,
        } );

    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( ( todo, i ) => {
                            return (
                                    <li 
                                        key={ todo.id } 
                                        className="list-group-item" 
                                    > 
                                        <p 
                                            className={ `${ todo.done && 'complete' }` }
                                            onClick={ () => handleToggle( todo.id ) } 
                                        > 
                                            { i + 1 } . { todo.desc } 
                                        </p>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={ () => handleDelete(todo.id) } 
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button className="btn btn-outline-primary mt-1 btn-block" type="submit" >
                            Agregar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
