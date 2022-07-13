import { SiBuymeacoffee } from 'react-icons/si'
import BaseCard from '../../Base/BaseCard'
import { socialLinks } from '../../../../api/socialLinks'

export default function BmacCard({ bmacSocialLink }) {
  const { platform, url } = socialLinks.bmac

  return (
    <BaseCard
      platform={platform}
      url={url}
      
      customCardClasses='bg-gradient-to-r from-yellow-300 to-bmac-orange hover:shadow-[10px_10px_0px_#FFDD00] hover:to-gray-200 hover:from-gray-400 '
      jsxIcon={<SiBuymeacoffee size={36}/>}
    />
  )
}
