import BaseCard from "../../Base/BaseCard";
import { SiDevdotto } from "react-icons/si";
import { socialLinks } from "../../../../api/socialLinks";

export default function DevtoCard({ devtoSocialLink }) {
  const { platform, url } = socialLinks.devto;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<SiDevdotto size={36} />}
      customCardClasses="bg-gradient-to-r from-cyan-300 to-discord-color hover:to-gray-200 hover:from-gray-400  hover:shadow-[10px_10px_0px_#22262d]"
    />
  );
}
