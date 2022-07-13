import BaseCard from '../../Base/BaseCard'
import { FaRedditAlien } from 'react-icons/fa'

export default function RedditCard({ redditSocialLink }) {
  const { platform, url} = redditSocialLink

  return (
    <BaseCard
      platform={platform}
      url={url}
      
      jsxIcon={<FaRedditAlien size={36} />}
      customCardClasses='bg-gradient-to-r from-red-500 to-reddit-color hover:shadow-[10px_10px_0px_#ff4500] hover:to-gray-200 hover:from-gray-400 '
    />
  )
}
