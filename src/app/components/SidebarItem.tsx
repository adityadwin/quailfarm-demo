// app/components/SidebarItem.tsx
import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isActive: boolean;
  // isMinimized?: boolean; // Tidak perlu jika hanya pakai breakpoint
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive,
  // isMinimized, // Tidak perlu
}) => {
  return (
    <li>
      <Link
        href={href}
        // --- Sesuaikan flex alignment, padding, dan tampilkan/sembunyikan label ---
        className={`flex items-center justify-center lg:justify-start py-3 lg:py-2.5 px-4 rounded-lg transition-colors duration-200 group ${
          // Tambah group
          isActive
            ? "bg-[#EAA25D] text-[#FFFFFF]"
            : "text-[#404040] hover:bg-[#EAA25D]/20"
        }`}
      >
        {/* --- Hapus margin default, tambahkan margin responsif --- */}
        <Icon className="h-5 w-5 flex-shrink-0 lg:mr-3" /> {/* lg:mr-3 */}
        {/* --- Sembunyikan label di bawah lg --- */}
        <span className="hidden lg:inline whitespace-nowrap">{label}</span>
        {/* Tooltip opsional untuk mode minimize (muncul saat hover) */}
        <span className="absolute left-full ml-2 px-2 py-1 rounded bg-gray-800 text-white text-xs invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity whitespace-nowrap block lg:hidden z-10">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
