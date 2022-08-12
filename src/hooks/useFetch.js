import { useEffect, useRef, useState } from 'react';

export const useFetch = url => {
	const isMounted = useRef(true);
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	useEffect(() => {
		// Cuando el componente se desmonte actualizo el valor de la referencia
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({ data: null, isLoading: true, hasError: null });

		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				//setTimeout( () => {
				if (isMounted.current) {
					setState({
						data,
						isLoading: false,
						hasError: null,
					});
				} else {
					console.log('setState no se llamo');
				}
				// }, 4000 );
			})
			.catch(() => {
				setState({
					data: null,
					isLoading: false,
					hasError: 'No se pudo cargar la info',
				});
			});
	}, [url]);

	return state;
};
