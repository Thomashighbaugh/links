import BaseCard from "../../Base/BaseCard";
import { BsDiscord } from "react-icons/bs";
import { socialLinks } from "../../../../api/socialLinks";

export default function DevtoCard({ devtoSocialLink }) {
  const { platform, url } = socialLinks.discord;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<BsDiscord size={36} />}
      customCardClasses="bg-gradient-to-r from-discord-color to-indigo-300 hover:to-gray-200 hover:from-gray-400  hover:shadow-[10px_10px_0px_#8265ff]"
    />
  );
}
