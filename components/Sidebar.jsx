"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBuilding, FaPlusCircle } from "react-icons/fa"; // Ikon untuk menu
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out ${
          isDarkMode ? "bg-gray-800" : "bg-blue-700"
        } w-16 z-50 shadow-xl border-r-4 ${
          isDarkMode ? "border-gray-700" : "border-blue-500"
        } ${
          !isSidebarOpen ? "pointer-events-none" : "pointer-events-auto"
        }`} // Menonaktifkan interaksi saat sidebar tertutup
      >
        {/* Header Sidebar */}
        <div className={`flex items-center justify-center p-3 border-b ${
          isDarkMode ? "border-gray-700" : "border-blue-600"
        }`}>
          <button
            type="button"
            onClick={toggleSidebar}
            className={`${
              isDarkMode ? "text-gray-200 hover:text-gray-100" : "text-white hover:text-blue-200"
            } focus:outline-none transition duration-300`}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6" // Ukuran ikon close diubah menjadi h-6 w-6
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="p-2">
          {/* Home */}
          <Link
            href="/"
            className={`group flex items-center justify-center ${
              isDarkMode ? "text-gray-200" : "text-white"
            } ${
              pathname === "/" ? (isDarkMode ? "bg-gray-700" : "bg-blue-600") : ""
            } hover:${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded-lg p-2 mb-1 transition duration-300 relative`} // Padding diubah menjadi p-2 dan margin-bottom diubah menjadi mb-1
          >
            <div className="relative">
              <FaHome className="text-2xl" /> {/* Ukuran ikon diubah menjadi text-2xl */}
              {/* Pop-up Teks */}
              {isSidebarOpen && ( // Hanya tampilkan pop-up jika sidebar terbuka
                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? "bg-gray-700" : "bg-blue-800"
                } text-white px-2 py-1 rounded-lg shadow-md text-xs whitespace-nowrap`}>
                  Home
                </span>
              )}
            </div>
          </Link>

          {/* Properties */}
          <Link
            href="/properties"
            className={`group flex items-center justify-center ${
              isDarkMode ? "text-gray-200" : "text-white"
            } ${
              pathname === "/properties" ? (isDarkMode ? "bg-gray-700" : "bg-blue-600") : ""
            } hover:${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded-lg p-2 mb-1 transition duration-300 relative`} // Padding diubah menjadi p-2 dan margin-bottom diubah menjadi mb-1
          >
            <div className="relative">
              <FaBuilding className="text-2xl" /> {/* Ukuran ikon diubah menjadi text-2xl */}
              {/* Pop-up Teks */}
              {isSidebarOpen && ( // Hanya tampilkan pop-up jika sidebar terbuka
                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? "bg-gray-700" : "bg-blue-800"
                } text-white px-2 py-1 rounded-lg shadow-md text-xs whitespace-nowrap`}>
                  Properties
                </span>
              )}
            </div>
          </Link>

          {/* Add Property */}
          <Link
            href="/properties/add"
            className={`group flex items-center justify-center ${
              isDarkMode ? "text-gray-200" : "text-white"
            } ${
              pathname === "/properties/add" ? (isDarkMode ? "bg-gray-700" : "bg-blue-600") : ""
            } hover:${
              isDarkMode ? "bg-gray-700" : "bg-blue-600"
            } rounded-lg p-2 mb-1 transition duration-300 relative`} // Padding diubah menjadi p-2 dan margin-bottom diubah menjadi mb-1
          >
            <div className="relative">
              <FaPlusCircle className="text-2xl" /> {/* Ukuran ikon diubah menjadi text-2xl */}
              {/* Pop-up Teks */}
              {isSidebarOpen && ( // Hanya tampilkan pop-up jika sidebar terbuka
                <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode ? "bg-gray-700" : "bg-blue-800"
                } text-white px-2 py-1 rounded-lg shadow-md text-xs whitespace-nowrap`}>
                  Add Property
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;