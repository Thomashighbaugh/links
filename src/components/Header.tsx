import { useState, useEffect } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

import useIsMobile from '../hooks/useIsMobile';

import meta_tags from '../config/meta_tags';
import details from '../config/details';

export default function Header() {
	return (
		<header className='w-full mt-0' aria-label='Header'>
			<div className='hero-image'>
				<h1 className='text-center pb-12 pt-12'>
					{details.name_surname}
				</h1>
				<h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center pt-24'>
					{details.role}
				</h2>
			</div>
			<noscript>
				<p className='w-full mt-6 text-xl text-center bg-black bg-opacity-75 '>
					The functionality of this site is <em>not guarenteed</em>{' '}
					without Javascript enabled! <hr /> Sorry for any
					inconvenience this may cause.
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
