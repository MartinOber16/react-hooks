import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { loading, data } = useFetch( url );
    const { author, quote } = !!data && data[0]; // doble negacion es null convierte en false

    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr />

            { 
                loading ? ( <div className="alert alert-info text-center"> Loading ... </div> ) 
                        : ( <div className="text-end"><blockquote className="blockquote text-right"><p className="mb-3"> { quote } </p> <footer className="blockquote-footer">  { author } </footer> </blockquote> </div> )

            }
            
            <br />
            <button 
                className="btn btn-primary" 
                onClick={ increment } 
            >
                Siguiente frase
            </button>

        </div>
    )
}

MultipleCustomHooks.displayName='MultipleCustomHooks';