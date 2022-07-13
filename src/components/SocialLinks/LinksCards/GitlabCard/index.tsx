import BaseCard from "../../Base/BaseCard";
import { SiGitlab } from "react-icons/si";

export default function GitlabCard({ gitlabSocialLink }) {
  const { platform, url } = gitlabSocialLink;

  return (
    <BaseCard
      platform={platform}
      url={url}
      jsxIcon={<SiGitlab size={36} />}
      customCardClasses="bg-gradient-to-r from-indigo-500 to-orange-400 hover:to-gray-200 hover:from-gray-400  hover:shadow-[10px_10px_0px_#F88ED6]"
    />
  );
}
