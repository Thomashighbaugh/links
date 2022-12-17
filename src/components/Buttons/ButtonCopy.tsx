import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from './ButtonIcon';

interface IProps {
	title: string;
	contentToCopy: string;
}

export default function ButtonCopy({ title, contentToCopy }: IProps) {
	const [isContentCopied, setIsContentCopied] = useState(false);

	return (
		<div className='relative'>
			<ButtonIcon
				title={`Copy ${title.toLowerCase()}`}
				icon={faClipboard}
				iconCss='text-color-light dark:text-color-dark transition-colors duration-200'
				onClick={() => {
					setIsContentCopied(true);
					setTimeout(() => setIsContentCopied(false), 1500);

					copy(contentToCopy);
				}}
			/>
			{isContentCopied && (
				<div className='absolute left-1/2 -translate-x-1/2 mt-[2px] px-2 py-1 whitespace-nowrap rounded-full bg-accent-primary text-sm text-color-dark'>
					<span className='w-2 h-2 absolute top-[-3px] left-1/2 -translate-x-1/2 rotate-45 rounded-xs bg-accent-primary'></span>
					{`${title} copied!`}
				</div>
			)}
		</div>
	);
}
