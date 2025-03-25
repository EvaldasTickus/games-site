import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface PlatformIconProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <div className="flex my-1.5">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return (
          <div key={platform.id}>
            <Icon className="text-xl text-gray-500 dark:text-gray-400" />
          </div>
        )
      })}
    </div>
  );
};

export default PlatformIconList;
