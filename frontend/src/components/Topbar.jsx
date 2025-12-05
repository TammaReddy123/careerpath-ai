import { Menu } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-[#2D3748] shadow border-b border-[#374151]">
      <button
        type="button"
        onClick={onMenuClick}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#374151] bg-[#1F2937] shadow-sm hover:bg-[#374151] text-white transition"
      >
        <Menu size={18} />
      </button>
    </div>
  );
}
