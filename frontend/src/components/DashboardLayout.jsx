import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSidebar } from "../context/SidebarContext";

export default function DashboardLayout({ children, title }) {
  const { sidebarOpen, closeSidebar, setSidebarOpen } = useSidebar();

  useEffect(() => {
    // prevent background scroll when sidebar is open
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-[#1A202C]">
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={closeSidebar}
        />
      )}

      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 md:p-10 text-white">
          <div className="max-w-5xl w-full mx-auto">
            {title && (
              <h1 className="text-3xl font-bold tracking-tight mb-4">
                {title}
              </h1>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

