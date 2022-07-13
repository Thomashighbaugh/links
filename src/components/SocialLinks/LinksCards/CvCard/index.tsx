import BaseCard from '../../Base/BaseCard'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { socialLinks } from '../../../../api/socialLinks'

export default function CvCard({ cvSocialLink }) {
  const { platform, url } = socialLinks.cv

  return (
    <BaseCard
      platform={platform}
      url={url}
      customCardClasses='bg-gradient-to-r from-green-400  to-teal-400 hover:shadow-[10px_10px_0px_#00FFA0] hover:to-gray-200 hover:from-gray-400 '
      jsxIcon={<AiOutlineFilePdf size={36}/>}
    />
  )
}
