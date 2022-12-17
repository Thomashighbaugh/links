import { useState, useEffect } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import useIsMobile from '../hooks/useIsMobile';


import meta_tags from '../config/meta_tags';
import details from '../config/details';

export default function Header() {


	return (
		<header className='w-full' aria-label='Header'>
	<h1 className='text-center'>{details.name_surname}</h1>
			<div className='w-36 h-36 flex justify-center items-center mx-auto mb-2  bg-transparent'>
				<img
					src={details.hero_image_url}
					width={120}
					height={120}
					alt='Hero image'
				/>
			</div>
		
			<h2 className='text-center'>{details.role}</h2>
			<noscript>
				<p className='w-full mt-6 text-xl text-center text-red-500'>
					Enable JavaScript to enjoy all the features of this app.
				</p>
			</noscript>
		</header>
	);
}

async function shareUrl() {
	const navigator: any = window.navigator;
	const shareUrlData = {
		title: meta_tags.title,
		text: meta_tags.description,
		url: meta_tags.app_url,
	};

	try {
		await navigator.share(shareUrlData);
	} catch (error) {
		console.error('ERROR NAVIGATOR SHARE: ', error);
	}
}
