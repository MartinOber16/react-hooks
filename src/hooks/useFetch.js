import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {

        // Cuando el componente se desmonte actualizo el valor de la referencia
        return () => {
            isMounted.current = false;
        }
        
    }, []);

    useEffect( () => {

        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                //setTimeout( () => {
                    if( isMounted.current ) {
                        setState( {
                            data,
                            loading: false,
                            error: null,
                        });
                    } else {
                        console.log('setState no se llamo');
                    }
               // }, 4000 );
            });

    }, [url]);

    return state;

}
