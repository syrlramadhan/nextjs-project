"use client";

import Link from "next/link";
import { FaArrowLeft, FaUser, FaLock, FaBell, FaEnvelope, FaChevronDown, FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const [openSection, setOpenSection] = useState(null);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Ambil state dan fungsi toggle dark mode
  const router = useRouter();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLogout = () => {
    console.log("User logged out");
    alert("Anda telah logout!");
    router.push("/login");
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.0 }}
        className={`shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <button
            onClick={() => router.back()}
            className={`flex items-center ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"}`}
          >
            <FaArrowLeft className="mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Profile
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      </motion.div>

      {/* Settings Content */}
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          {/* Section: Profile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className={`rounded-lg shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleSection("profile")}
              className={`w-full p-4 flex items-center justify-between ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
              } transition-colors`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-50"}`}>
                  <FaUser className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <div className="text-left">
                  <h2 className={`text-md font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Profile
                  </h2>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Manage your profile information
                  </p>
                </div>
              </div>
              <FaChevronDown
                className={`h-4 w-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } transition-transform ${openSection === "profile" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "profile" && (
              <div className={`px-4 pb-4 space-y-2 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
              >
                <Link
                  href="/profile"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Edit Profile
                  </span>
                </Link>
                <Link
                  href="/profile/change-password"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Change Password
                  </span>
                </Link>
              </div>
            )}
          </motion.div>

          {/* Section: Security */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.2 }}
            className={`rounded-lg shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleSection("security")}
              className={`w-full p-4 flex items-center justify-between ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
              } transition-colors`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-50"}`}>
                  <FaLock className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <div className="text-left">
                  <h2 className={`text-md font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Security
                  </h2>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Manage your account security
                  </p>
                </div>
              </div>
              <FaChevronDown
                className={`h-4 w-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } transition-transform ${openSection === "security" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "security" && (
              <div className={`px-4 pb-4 space-y-2 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
              >
                <Link
                  href="/settings/security"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Security Settings
                  </span>
                </Link>
                <Link
                  href="/settings/two-factor-auth"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Two-Factor Authentication
                  </span>
                </Link>
              </div>
            )}
          </motion.div>

          {/* Section: Notifications */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.3 }}
            className={`rounded-lg shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleSection("notifications")}
              className={`w-full p-4 flex items-center justify-between ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
              } transition-colors`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-50"}`}>
                  <FaBell className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <div className="text-left">
                  <h2 className={`text-md font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Notifications
                  </h2>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Manage your notification preferences
                  </p>
                </div>
              </div>
              <FaChevronDown
                className={`h-4 w-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } transition-transform ${openSection === "notifications" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "notifications" && (
              <div className={`px-4 pb-4 space-y-2 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
              >
                <Link
                  href="/settings/notifications"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Notification Settings
                  </span>
                </Link>
                <Link
                  href="/settings/email-notifications"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Email Notifications
                  </span>
                </Link>
              </div>
            )}
          </motion.div>

          {/* Section: Email */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.4 }}
            className={`rounded-lg shadow-sm border ${
              isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleSection("email")}
              className={`w-full p-4 flex items-center justify-between ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
              } transition-colors`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${isDarkMode ? "bg-blue-900" : "bg-blue-50"}`}>
                  <FaEnvelope className={`h-5 w-5 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <div className="text-left">
                  <h2 className={`text-md font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    Email
                  </h2>
                  <p className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Manage your email preferences
                  </p>
                </div>
              </div>
              <FaChevronDown
                className={`h-4 w-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                } transition-transform ${openSection === "email" ? "rotate-180" : ""}`}
              />
            </button>
            {openSection === "email" && (
              <div className={`px-4 pb-4 space-y-2 border-t ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
              >
                <Link
                  href="/settings/email-preferences"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Email Preferences
                  </span>
                </Link>
                <Link
                  href="/settings/change-email"
                  className={`block p-2 rounded-lg ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50"
                  } transition-colors text-left`}
                >
                  <span className={`text-sm ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                    Change Email
                  </span>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg ${
          isDarkMode ? "bg-red-700 hover:bg-red-600" : "bg-red-600 hover:bg-red-500"
        } text-white focus:outline-none`}
      >
        <FaSignOutAlt className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SettingsPage;