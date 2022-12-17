import ButtonCopy from './Buttons/ButtonCopy';

import details from '../config/details';

const year = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className='w-full flex justify-between items-center mt-20'>
			<span>&copy; {year}</span>
			<div className='inline-flex items-center gap-x-[2px]'>
				<ButtonCopy title='E-mail' contentToCopy={details.email} />
				<span className='text-right'>{details.email}</span>
			</div>
		</footer>
	);
}
