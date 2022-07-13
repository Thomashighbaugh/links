import BaseCard from "../../Base/BaseCard";
import { BsLinkedin } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

export default function LinkedinCard({ linkedinSocialLink }) {
  const { platform, url } = linkedinSocialLink;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<BsLinkedin size={36} />}
      customCardClasses="bg-gradient-to-l from-blue-400 to-blue-600  hover:shadow-[10px_10px_0px_#0A66C2] hover:to-gray-200 hover:from-gray-400 "
    />
  );
}
