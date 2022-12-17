import { useState, useEffect } from 'react';

const THEME_KEY = 'IS_DARK_THEME';

export default function useTheme() {
	// Dark theme preferred
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			const storedThemePreference = localStorage.getItem(THEME_KEY);

			if (!storedThemePreference) {
				const isDarkPreferred = themePreference();

				localStorage.setItem(
					THEME_KEY,
					JSON.stringify(isDarkPreferred)
				);

				return isDarkPreferred;
			}

			return storedThemePreference === 'true'
				? true
				: storedThemePreference === 'false'
				? false
				: true;
		}

		return true;
	});

	useEffect(() => {
		isDarkTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');

		localStorage.setItem(THEME_KEY, JSON.stringify(isDarkTheme));
	}, [isDarkTheme]);

	return {
		isDarkTheme,
		setIsDarkTheme: (bool: boolean) => setIsDarkTheme(bool),
	};
}

function themePreference() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
