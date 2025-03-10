"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBuilding, FaPlusCircle } from "react-icons/fa"; // Ikon untuk menu

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out bg-blue-700 w-20 z-50 shadow-xl border-r-4 border-blue-500`} // Lebar sidebar diubah menjadi w-20
      >
        {/* Header Sidebar */}
        <div className="flex items-center justify-center p-4 border-b border-blue-600">
            <button type="button"
                onClick={toggleSidebar}
                className="text-white hover:text-blue-200 focus:outline-none transition duration-300">
                <span className="sr-only">Close sidebar</span>
                <svg
                className="h-7 w-7"
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
            className={`group flex items-center justify-center text-white ${
              pathname === "/" ? "bg-blue-600 font-semibold" : ""
            } hover:bg-blue-600 hover:text-white rounded-lg p-3 mb-2 transition duration-300 relative`}
          >
            <div className="relative">
              <FaHome className="text-4xl" /> {/* Ukuran ikon 5x1 */}
              {/* Pop-up Teks */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-800 text-white px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
                Home
              </span>
            </div>
          </Link>

          {/* Properties */}
          <Link
            href="/properties"
            className={`group flex items-center justify-center text-white ${
              pathname === "/properties" ? "bg-blue-600 font-semibold" : ""
            } hover:bg-blue-600 hover:text-white rounded-lg p-3 mb-2 transition duration-300 relative`}
          >
            <div className="relative">
              <FaBuilding className="text-4xl" /> {/* Ukuran ikon 5x1 */}
              {/* Pop-up Teks */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-800 text-white px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
                Properties
              </span>
            </div>
          </Link>

          {/* Add Property */}
          <Link
            href="/properties/add"
            className={`group flex items-center justify-center text-white ${
              pathname === "/properties/add" ? "bg-blue-600 font-semibold" : ""
            } hover:bg-blue-600 hover:text-white rounded-lg p-3 mb-2 transition duration-300 relative`}
          >
            <div className="relative">
              <FaPlusCircle className="text-4xl" /> {/* Ukuran ikon 5x1 */}
              {/* Pop-up Teks */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-800 text-white px-3 py-1 rounded-lg shadow-md text-sm whitespace-nowrap">
                Add Property
              </span>
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