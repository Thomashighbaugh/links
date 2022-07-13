import BaseCard from '../../Base/BaseCard'
import { SiGithub } from 'react-icons/si'

export default function GithubCard({ githubSocialLink }) {
  const { platform, url } = githubSocialLink

  return (
    <BaseCard
      platform={platform}
      url={url}
      
      jsxIcon={<SiGithub size={36}/>}
 customCardClasses='bg-gradient-to-r from-pink-400 to-yellow-500 hover:to-gray-200 hover:from-gray-400  hover:shadow-[10px_10px_0px_#F88ED6]'
    />
  )
}
