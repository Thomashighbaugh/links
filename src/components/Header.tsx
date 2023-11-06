import { useState, useEffect } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import meta_tags from '../config/meta_tags';
import details from '../config/details';

export default function Header() {
	return (
		<header
			className='max-w-6xl mt-36 md:mt-0 lg:mt-0 xl:mt-0'
			aria-label='Header'
		>
			<div className='inline-flex rounded-md border-2 mx-2 mr-0 sm:mr-0 md:mr-4 lg:mr-4 xl:mr-4 border-black bg-white p-6 font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
				<div className='max-w-5xl'>
					<h1 className='text-left pb-6 pt-6 text-4xl text-black '>
						{details.name_surname}
					</h1>
					<h2 className='text-black font-black motion-safe:animate-pulse  md:text-lg lg:text-lg xl:text-xl text-left '>
						{details.role}
					</h2>
				</div>
					<Image className="min-w-72 min-h-72" height={108} width={108} src='/hero-image.png' />
			</div>

			<noscript>
				<p className='w-full mt-6 text-xl text-center'>
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
