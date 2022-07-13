import BaseCard from "../../Base/BaseCard";
import { BiHomeHeart } from "react-icons/bi";
export default function PortfolioCard({ portfolioSocialLink }) {
  const { platform, url } = portfolioSocialLink;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<BiHomeHeart size={36} />}
      customCardClasses="bg-gradient-to-l to-indigo-500 from-indigo-400 hover:shadow-[10px_10px_0px_#3351d6] hover:to-gray-200 hover:from-gray-400 "
    />
  );
}
