import ButtonCopy from './Buttons/ButtonCopy';

import details from '../config/details';

const year = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className='w-full flex  pr-8 pb-1 text-sm justify-between items-center fixed bottom-0'>
			<div className='inline-flex items-center gap-x-[2px]'>
				<ButtonCopy title='E-mail' contentToCopy={details.email} />
				<span>Thomas Leon Highbaugh</span>
			</div>
			<span className='text-right'>&copy; {year}</span>
		</footer>
	);
}
