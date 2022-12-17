import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import colors from '../config/colors';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		colors.map((color) => {
			document.documentElement.style.setProperty(
				color.property,
				color.value
			);
		});
	}, []);

	return <Component {...pageProps} />;
}
