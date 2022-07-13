import BaseCard from "../../Base/BaseCard";
import { SiTwitter } from "react-icons/si";

export default function TwitterCard({ twitterSocialLink = {} }) {
  const { platform, url } = twitterSocialLink;

  return (
    <BaseCard
      platform={`${platform}`}
      url={url}
      jsxIcon={<SiTwitter size={36} />}
      customCardClasses="dark:bg-opacity-20 bg-gradient-to-l from-cyan-500 to-twitter-color  hover:shadow-[10px_10px_0px_#00caff] hover:to-gray-200 hover:from-gray-400 "
    />
  );
}
