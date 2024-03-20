import {
	faDev,
	faDiscord,
	faDribbble,
	faGithub,
	faGitlab,
	faInstagram,
	faLinkedinIn,
	faTwitter,
	faReddit,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faPhone,
	faCoffee,
	faHeart,
	faGlobe,
	faAddressCard,
	faEnvelopesBulk,
	faEnvelopeOpenText,
	faFaceLaughWink,
} from '@fortawesome/free-solid-svg-icons';

import details from './details';

const links = [
	{
		text: 'Portfolio',
		icon: faGlobe,
		url: 'https://thomasleonhighbaugh.me',
	},
	{
		text: 'Resume',
		icon: faAddressCard,
		url: 'https://resume.thomasleonhighbaugh.me',
	},

	{
		text: 'GitHub',
		icon: faGithub,
		url: 'https://github.com/Thomashighbaugh/',
	},
	{
		text: 'LinkedIn',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/thomas-leon-highbaugh/',
	},
	{
		text: 'E-mail',
		icon: faEnvelopeOpenText,
		url: `mailto:${details.email}`,
	},

	{
		text: 'Dev.to',
		icon: faDev,
		url: 'dev.to/thomashighbaugh',
	},
	{
		text: 'Discord',
		icon: faDiscord,
		url: 'https://discord.com/ThomasHighbaugh#3886',
	},

	{
		text: 'Dribbble',
		icon: faDribbble,
		url: 'https://dribbble.com/thighbaugh',
	},
	{
		text: 'Instagram',
		icon: faInstagram,
		url: 'https://www.instagram.com/thomashighbaugh/',
	},
	{
		text: 'Twitter',
		icon: faTwitter,
		url: 'https://twitter.com/thomashighbaugh',
	},
	{
		text: 'GitLab',
		icon: faGitlab,
		url: 'https://gitlab.com/Thomashighbaugh/',
	},
	{
		text: 'Other E-mail',
		icon: faEnvelope,
		url: `mailto:${details.email2}`,
	},
	{
		text: 'Hugging Face',
		icon: faFaceLaughWink,
		url: 'https://huggingface.co/thomashighbaugh',
	},
	{
		text: 'Reddit',
		icon: faReddit,
		url: 'https://www.reddit.com/user/ThomasLeonHighbaugh/',
	},
	{
		text: 'BuyMeACoffee',
		icon: faCoffee,
		url: 'https://www.buymeacoffee.com/thomashighbaugh',
	},
	{
		text: 'Ko-Fi',
		icon: faHeart,
		url:'https://ko-fi.com/thomashighbaugh'
	},
	{
		text: 'Phone',
		icon: faPhone,
		url: 'tel:+15109070654',
	},
];

export default links;
