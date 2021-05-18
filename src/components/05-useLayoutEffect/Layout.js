import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data } = useFetch( url );
    const { quote } = !!data && data[0]; // doble negacion es null convierte en false

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <div className="text-end">
                <blockquote className="blockquote text-right">
                    <p className="mb-3" ref={ pTag } > { quote } </p> 
                </blockquote> 
            </div> 

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary" 
                onClick={ increment } 
            >
                Siguiente frase
            </button>

        </div>
    )
}