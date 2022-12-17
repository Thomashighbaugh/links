import { faDev, faDiscord, faDribbble, faGithub, faGitlab, faInstagram, faLinkedinIn, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import details from './details';

const links = [

	{
		text: 'GitHub',
		icon: faGithub,
		url: 'https://github.com/Thomashighbaugh/',
	},
	{
		text: 'GitLab',
		icon: faGitlab,
		url: 'https://gitlab.com/Thomashighbaugh/',
	},
	{
		text: 'Dev.to',
		icon: faDev,
		url: 'dev.to/thomashighbaugh',
	},
	{
		text: 'Discord',
		icon: faDiscord,
		url: ''
	},

	{
		text: 'Dribbble',
		icon: faDribbble,
		url:'https://dribbble.com/thighbaugh'
	},
	{
		text: 'Instagram',
		icon: faInstagram,
		url: 'https://www.instagram.com/thomashighbaugh/',
	},
	{
		text: 'Twitter',
		icon: faTwitter,
		url: 'https://twitter.com/thomashighbaugh'
	},
	{
		text: 'LinkedIn',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/thomas-leon-highbaugh/',
	},
	{
		text: 'Resume',
		icon: faAddressCard,
		url: 'https://resume-thomas-leon-highbaugh.vercel.app/',
	},
	{
		text: 'Website',
		icon: faGlobe,
		url: 'https://thomasleonhighbaugh.me',
	},
	{
		text: 'E-mail me',
		icon: faEnvelope,
		url: `mailto:${details.email}`,
	},
];

export default links;
