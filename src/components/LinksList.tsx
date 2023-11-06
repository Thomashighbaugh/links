import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import links from '../config/links';

export default function LinksList() {
	return (
		<ul className='w-full h-full grow gap-x-2  gap-y-4 pb-24 pt-6  flex flex-col  flex-wrap sm:flex-col md:flex-row lg:flex-row xl:flex-row '>
			{links.map((link) => (
				<li
					key={link.text}
					title={link.text}
					tabIndex={0}
					className='min-h-16 h-16 flex cursor-pointer items-center rounded-md border-2 border-black bg-blue-500 px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none  min-w-[29%] lg:max-w-[29%] xl:max-w-[29%] md:max-w-[28%] sm:mx-0 mx-2 md:mx-2 lg:mx-2 xl:mx-2  group'
				>
					<a
						href={link.url}
						target='_blank'
						rel='noopener'
						tabIndex={-1}
						className='w-full h-full max-x-full max-h-full flex md:justify-center lg:justify-center xl:justify-center items-center p-4'
					>
						<FontAwesomeIcon
							icon={link.icon}
							className='w-12 h-12 max-h-12 max-w-12 absolute  mx-9 text-black'
						/>
						<span className='mx-auto text-black md:invisible lg:invisible xl:invisible  text-2xl'>
							{link.text}
						</span>
					</a>
				</li>
			))}
		</ul>
	);
}
