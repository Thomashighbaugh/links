import MetaHead from '../components/MetaHead';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function FourOuFour() {
	return (
		<main className='w-full max-w-2xl min-h-screen flex flex-col justify-center items-center mx-auto p-8'>
			<MetaHead title='404 - Page not found' />
			<h1 className='font-bold'>404</h1>
			<h2>A secret place has been found.</h2>
			<h3 className='text-center'>
				You may have mistyped the address or the page has been moved to
				another URL.
			</h3>
			<Link href='/'>
				<div className='group flex justify-center items-center mt-4 px-2 py-1 rounded-full cursor-pointer'>
					<FontAwesomeIcon
						icon={faHome}
						className='w-6 h-6 mr-2 text-accent-primary transition-colors duration-200 group-hover:text-accent-primary-state group-focus:text-accent-primary-state'
					/>
					<span className='md:text-lg lg:text-xl text-accent-primary transition-colors duration-200 group-hover:text-accent-primary-state group-focus:text-accent-primary-state'>
						Back to home page
					</span>
				</div>
			</Link>
		</main>
	);
}
