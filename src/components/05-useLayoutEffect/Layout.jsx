import React from 'react';
import { useCounter, useFetch } from '../../hooks';
import { LoadingQuote, Quote } from '../03-examples';
import './layout.css';

export const Layout = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
	const { isLoading, data } = useFetch(url);
	const { quote, author } = !!data && data[0]; // doble negacion es null convierte en false

	return (
		<div>
			<h1>LayoutEffect</h1>
			<hr />

			{isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

			<button className='btn btn-primary' onClick={increment}>
				Siguiente frase
			</button>
		</div>
	);
};
