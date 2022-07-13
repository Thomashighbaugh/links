import BaseCard from "../../Base/BaseCard";
import { FiInstagram } from "react-icons/fi";

export default function InstagramCard({ instagramSocialLink }) {
  const { platform, url } = instagramSocialLink;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<FiInstagram size={36} />}
      customCardClasses="bg-gradient-to-r from-pink-600  to-indigo-500 hover:shadow-[10px_10px_0px_#CE2F84] hover:to-gray-200 hover:from-gray-400 "
    />
  );
}
