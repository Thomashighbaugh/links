import type { MouseEventHandler } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
	title: string;
	icon: IconProp;
	buttonCss?: string;
	iconCss?: string;
	onClick: MouseEventHandler;
}

export default function ButtonIcon({
	title,
	icon,
	buttonCss,
	iconCss,
	onClick,
}: IProps) {
	return (
		<button
			type='button'
			title={title}
			aria-label={title}
			className={`w-7 h-7 flex justify-center items-center p-2 rounded-full ${
				buttonCss && buttonCss
			}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={icon} className={iconCss} />
		</button>
	);
}
