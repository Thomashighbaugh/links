import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

import useTheme from '../hooks/useTheme';
import ButtonIcon from './Buttons/ButtonIcon';

export default function ThemeToggle() {
	const { setIsDarkTheme } = useTheme();

	return (
		<div className='inline-flex gap-x-1 p-[2px] rounded-full bg-amber-300 dark:bg-zinc-500 '>
			<ButtonIcon
				title='Set light theme'
				icon={faLightbulb}
				buttonCss='bg-neutral-50 dark:bg-transparent'
				iconCss='text-color-light dark:text-color-dark'
				onClick={() => setIsDarkTheme(false)}
			/>
			<ButtonIcon
				title='Set dark theme'
				icon={faMoon}
				buttonCss='bg-transparent dark:bg-neutral-50'
				iconCss='text-color-light'
				onClick={() => setIsDarkTheme(true)}
			/>
		</div>
	);
}
