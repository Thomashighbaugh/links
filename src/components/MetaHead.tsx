import Head from 'next/head';

import meta_tags from '../config/meta_tags';

interface IProps {
	title?: string;
	description?: string;
}

export default function MetaHead({ title, description }: IProps) {
	return (
		<Head>
			{/* Global Metadata */}
			<meta
				name='viewport'
				content='width=device-width,initial-scale=1'
			/>
			<link rel='manifest' href='/app.webmanifest' />
			<link rel='icon' href='/favicon/favicon-512.png' />
			<link rel='apple-touch-icon' href='/favicon/favicon-512.png' />
			<meta name='theme-color' content='#000' />

			{/* Primary Meta Tags */}
			<title>{title || meta_tags.title}</title>
			<meta name='title' content={title || meta_tags.title} />
			<meta
				name='description'
				content={description || meta_tags.description}
			/>
			<meta name='keywords' content={meta_tags.keywords} />
			<meta name='author' content={meta_tags.author} />
			<meta name='copyright' content={meta_tags.author} />

			{/* Open Graph & Facebook */}
			<meta property='og:type' content='website' />
			<meta property='og:url' content={meta_tags.app_url} />
			<meta property='og:title' content={title || meta_tags.title} />
			<meta
				property='og:description'
				content={description || meta_tags.description}
			/>
			<meta property='og:image' content={meta_tags.og_image_url} />

			{/* Twitter */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={meta_tags.app_url} />
			<meta property='twitter:title' content={title || meta_tags.title} />
			<meta
				property='twitter:description'
				content={description || meta_tags.description}
			/>
			<meta property='twitter:image' content={meta_tags.og_image_url} />
		</Head>
	);
}
