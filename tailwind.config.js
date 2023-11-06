/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': 'var(--primary-light)',
				'primary-dark': 'var(--primary-dark)',
				'color-light': 'var(--color-light)',
				'color-dark': 'var(--color-dark)',
				'accent-primary': 'var(--accent-primary)',
				'accent-primary-state': 'var(--accent-primary-state)',
				blue: {
					DEFAULT: '#C9DCD8',
					50: '#F3F7F6',
					100: '#EEF4F3',
					200: '#E5EEEC',
					300: '#DCE8E5',
					400: '#D2E2DF',
					500: '#C9DCD8',
					600: '#A1C2BB',
					700: '#79A89E',
					800: '#57877D',
					900: '#3D5F58',
					950: '#304A45',
				},
				purple: {
					DEFAULT: '#62449A',
					50: '#C5B7DF',
					100: '#B9A8D9',
					200: '#A38CCC',
					300: '#8C70C0',
					400: '#7554B3',
					500: '#62449A',
					600: '#523981',
					700: '#422E68',
					800: '#332350',
					900: '#231837',
					950: '#1B132B',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
