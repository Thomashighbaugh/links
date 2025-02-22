import { useState, useEffect } from 'react';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import meta_tags from '../config/meta_tags';
import details from '../config/details';

export default function Header() {
	return (
		<header
			className='max-w-6xl '
			aria-label='Header'
		>
			<div className='flex content-center justify-center md:inline-flex lg:inline-flex xl:inline-flex rounded-md border-2 mx-2 mr-0 sm:mr-0 md:mr-4 lg:mr-4 xl:mr-4 border-black bg-white p-6 font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
				<div className='max-w-5xl'>
					<h1 className='text-left pb-6 pt-6 text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white  '>
						{details.name_surname}
					</h1>
					<h2 className='text-black font-black motion-safe:animate-pulse  md:text-lg lg:text-xl xl:text-2xl text-left '>
						{details.role}
					</h2>
				</div>
				<Image className="justify-center align-middle" height={108} width={108} src='/hero-image.png' alt="logo of Thomas Leon Highbaugh" />
			</div>

			<noscript>
				<p className='w-full mt-6 text-xl text-center'>
					The functionality of this site is <em>not guaranteed</em>
					without JavaScript enabled! <hr />
					I understand the privacy concerns you may have, but note this site is not collecting any data about its visitors.You can check the code yourself. <hr />
					Sorry for any inconvenience this may cause.
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
