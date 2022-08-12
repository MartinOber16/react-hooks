import React from 'react';
import { useCounter, useFetch } from '../../hooks';
import '../02-useEffect/effects.css';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
	const { isLoading, data } = useFetch(url);
	const { author, quote } = !!data && data[0]; // doble negacion es null convierte en false

	return (
		<div>
			<h1>BrakingBad Quotes</h1>
			<hr />

			{isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

			<br />
			<button className='btn btn-primary' onClick={increment}>
				Siguiente frase
			</button>
		</div>
	);
};

MultipleCustomHooks.displayName = 'MultipleCustomHooks';
