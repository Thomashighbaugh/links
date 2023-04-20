import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import links from "../config/links";

export default function LinksList() {
	return (
		<ul className='w-full h-full  gap-y-4 mt-3 flex flex-col flex-wrap sm:flex-row md:flex-row lg:flex-row xl:flex-row -mx-2'>
			{links.map((link) => (
				<li
					key={link.text}
					title={link.text}
					tabIndex={0}
					className=' mb-4 sm:mb-0 md:mb-4 px-2 min-w-[28%] sm:mx-0 mx-4 md:mx-4 lg:mx-4 xl:mx-4 rounded bg-accent-primary transition-all duration-200 hover:bg-accent-primary-state hover:-translate-y-2
                focus:bg-accent-primary-state focus:-translate-y-2 hover:drop-shadow-2xl hover:shadow-2xl'
				>
					<a
						href={link.url}
						target='_blank'
						rel='noopener'
						tabIndex={-1}
						className='w-full h-full flex items-center p-3 rounded hover:text-color-light'
					>
						<FontAwesomeIcon
							icon={link.icon}
							className='w-10 h-10 hover:text-color-light absolute  m-10 text-color-dark'
						/>
						<span className='mx-auto text-color-dark md:invisible lg:invisible xl:invisible hover:text-color-light text-xl'>
							{link.text}
						</span>
					</a>
				</li>
			))}
		</ul>
	);
}
