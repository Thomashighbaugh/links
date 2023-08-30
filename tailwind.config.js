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
			},
		},
	},
	plugins: [],
};
