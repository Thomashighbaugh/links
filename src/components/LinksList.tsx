import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import links from '../config/links';

export default function LinksList() {
	return (
		<ul className='w-full min-h-full grow gap-x-4  gap-y-4 p-12 flex flex-col flex-wrap sm:flex-col md:flex-row lg:flex-row xl:flex-row -mx-4 overflow-hidden'>
		 
			{links.map((link) => (
				<li
					key={link.text}
					title={link.text}
					tabIndex={0}
					className='min-h-24 min-w-[28%] lg:max-w-[28%] xl:max-w-[28%] md:max-w-[28%] sm:mx-0 mx-2 md:mx-2 lg:mx-2 xl:mx-2 rounded  bg-gradient-to-t from-accent-primary via-color-light to-gray-500 transition-all duration-400 hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-200 hover:to-gray-300 hover:-translate-y-2
                focus:bg-accent-primary-state focus:-translate-y-2 hover:drop-shadow-2xl hover:shadow-2xl hover:shadow-inner group'
				>
					<a
						href={link.url}
						target='_blank'
						rel='noopener'
						tabIndex={-1}
						className='w-full h-full max-x-full max-h-full flex md:justify-center lg:justify-center xl:justify-center items-center p-4 rounded group-hover:text-color-light'
					>
						<FontAwesomeIcon
							icon={link.icon}
							className='w-12 h-12 max-h-12 max-w-12 group-hover:text-color-light absolute  mx-9 text-color-dark'
						/>
						<span className='mx-auto text-color-dark md:invisible lg:invisible xl:invisible group-hover:text-color-light text-xl'>
							{link.text}
						</span>
					</a>
				</li>
			))}
		</ul>
	);
}
