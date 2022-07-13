import { socialLinks } from '../../api/socialLinks'
import KofiCard from './LinksCards/KofiCard'
import BmacCard from './LinksCards/BmacCard'
import LinkedinCard from './LinksCards/LinkedinCard'
import TwitterCard from './LinksCards/TwitterCard'
import RedditCard from './LinksCards/RedditCard'
import GithubCard from './LinksCards/GithubCard'
import GitlabCard from './LinksCards/GitlabCard'
import InstagramCard from './LinksCards/InstagramCard'
import PortfolioCard from './LinksCards/PortfolioCard'
import CvCard from './LinksCards/CvCard'
import DevtoCard from './LinksCards/DevtoCard'
import DiscordCard from './LinksCards/DiscordCard'

export default function SocialLinks() {
  return (
    <section className='cards '>
      <PortfolioCard portfolioSocialLink={socialLinks.portfolio} />
      <CvCard cvSocialLink={socialLinks.cv} />
      <LinkedinCard linkedinSocialLink={socialLinks.linkedin} />
      <GithubCard githubSocialLink={socialLinks.github} />
      <GitlabCard gitlabSocialLink={socialLinks.gitlab} />

     
      <RedditCard redditSocialLink={socialLinks.reddit} />
      <DevtoCard devtoSocialLink={socialLinks.devto} />
      <InstagramCard instagramSocialLink={socialLinks.instagram} />
      <TwitterCard twitterSocialLink={socialLinks.twitter} />
      <DiscordCard discordSocialLink={socialLinks.discord} />
      <KofiCard KofiSocialLink={socialLinks.kofi} />
      <BmacCard KofiSocialLink={socialLinks.bmac} />
    </section>
  )
}
