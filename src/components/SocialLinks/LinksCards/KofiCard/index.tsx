import { SiKofi } from "react-icons/si";
import BaseCard from "../../Base/BaseCard";
import { socialLinks } from "../../../../api/socialLinks";

export default function KofiCard({ kofiSocialLink }) {
  const { platform, url } = socialLinks.kofi;

  return (
    <BaseCard
      platform={platform}
      url={url}
      customCardClasses="bg-gradient-to-r from-cyan-400 to-teal-500 hover:shadow-[10px_10px_0px_#FF3D50] hover:to-gray-200 hover:from-gray-400 "
      jsxIcon={<SiKofi size={36} />}
    />
  );
}
