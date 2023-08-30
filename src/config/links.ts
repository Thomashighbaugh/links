import {
	faDev,
	faDiscord,
	faDribbble,
	faGithub,
	faGitlab,
	faInstagram,
	faLinkedinIn,
	faTwitch,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faGlobe,
	faAddressCard,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import details from "./details";

const links = [
	{
	
		text: "Portfolio",
		icon: faGlobe,
		url: "https://thomasleonhighbaugh.me",
	},
		{
		text: "Resume",
		icon: faAddressCard,
		url: "https://resume-thomas-leon-highbaugh.vercel.app/",
	},

	{
		text: "GitHub",
		icon: faGithub,
		url: "https://github.com/Thomashighbaugh/",
	},
		{
		text: "LinkedIn",
		icon: faLinkedinIn,
		url: "https://www.linkedin.com/in/thomas-leon-highbaugh/",
	},
	{
		text: "Dev.to",
		icon: faDev,
		url: "dev.to/thomashighbaugh",
	},
	{
		text: "Discord",
		icon: faDiscord,
		url: "https://discord.com/ThomasHighbaugh#3886",
	},

	{
		text: "Dribbble",
		icon: faDribbble,
		url: "https://dribbble.com/thighbaugh",
	},
	{
		text: "Instagram",
		icon: faInstagram,
		url: "https://www.instagram.com/thomashighbaugh/",
	},
	{
		text: "OpenSea",
		icon: faShoppingCart,
		url: "https://opensea.io/Thomashighbaugh",
	},
	{
		text: "Twitter",
		icon: faTwitter,
		url: "https://twitter.com/thomashighbaugh",
	},
	{
		text: "GitLab",
		icon: faGitlab,
		url: "https://gitlab.com/Thomashighbaugh/",
	},
	{
		text: "E-mail",
		icon: faEnvelope,
		url: `mailto:${details.email}`,
	},
];

export default links;
