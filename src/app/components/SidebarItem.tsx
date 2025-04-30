import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive,
}) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center justify-center lg:justify-start py-3 lg:py-2.5 px-4 rounded-lg transition-colors duration-200 group ${
          isActive
            ? "bg-[#EAA25D] text-[#FFFFFF]"
            : "text-[#404040] hover:bg-[#EAA25D]/20"
        }`}
      >
        <Icon className="h-5 w-5 flex-shrink-0 lg:mr-3" />

        <span className="hidden lg:inline whitespace-nowrap">{label}</span>

        <span className="absolute left-full ml-2 px-2 py-1 rounded bg-gray-800 text-white text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap block lg:hidden z-10">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
