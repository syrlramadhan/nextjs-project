"use client";

import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import Image from "next/image";
import Link from "next/link";
import { FaBell, FaGoogle, FaBars, FaBuilding, FaCog } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";

const Navbar = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Pembayaran properti Anda telah berhasil.",
      time: "2 jam yang lalu",
      isRead: false,
    },
    {
      id: 2,
      message: "Ada properti baru yang sesuai dengan kriteria Anda.",
      time: "1 hari yang lalu",
      isRead: false,
    },
    {
      id: 3,
      message: "Pembayaran properti Anda telah berhasil.",
      time: "3 hari yang lalu",
      isRead: true,
    },
  ]);

  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    profilePicture: null,
  });

  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Data user dummy jika tidak terhubung ke API
  const [dummyUser, setDummyUser] = useState({
    name: "User Name",
    email: "useremail@example.com",
    profilePicture: null,
  });

  // Fungsi untuk mengambil data user dari API
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/me`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Gunakan data dummy jika terjadi error
      setUserProfile(dummyUser);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [dummyUser]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNotification = () => {
    if (isNotificationOpen) {
      setNotifications(
        notifications.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
    }
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
        setNotifications(
          notifications.map((notification) => ({
            ...notification,
            isRead: true,
          }))
        );
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notifications]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full ${
          isScrolled
            ? `backdrop-blur-sm ${
                isDarkMode ? "bg-gray-800/50" : "bg-white/50"
              } shadow-lg`
            : isDarkMode
            ? "bg-gray-900"
            : "bg-blue-700"
        } z-50 transition-all duration-300`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo dan Tombol Sidebar */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={toggleSidebar}
                className={`rounded-lg p-2 ${
                  isScrolled
                    ? isDarkMode
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-gray-800 hover:bg-gray-200"
                    : isDarkMode
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <span className="sr-only">Open sidebar</span>
                <FaBars
                  className={`h-6 w-6 ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200"
                        : "text-gray-800"
                      : isDarkMode
                      ? "text-gray-200"
                      : "text-white"
                  }`}
                />
              </button>
              <Link href="/" className="ml-4 flex items-center">
                <FaBuilding
                  className={`h-8 w-8 ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200"
                        : "text-gray-800"
                      : isDarkMode
                      ? "text-gray-200"
                      : "text-white"
                  }`}
                />
                <span
                  className={`ml-2 hidden text-xl font-bold ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200"
                        : "text-gray-800"
                      : isDarkMode
                      ? "text-gray-200"
                      : "text-white"
                  } md:block`}
                >
                  MakassarProperty
                </span>
              </Link>
            </div>

            {/* Menu Kanan (Login, Notifikasi, Profil) */}
            <div className="flex items-center space-x-4">
              {/* Tombol Login */}
              <Link
                href="/login"
                className={`flex items-center rounded-lg px-3 py-2 ${
                  isScrolled
                    ? isDarkMode
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : isDarkMode
                    ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <FaGoogle
                  className={`mr-2 ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200"
                        : "text-gray-800"
                      : isDarkMode
                      ? "text-gray-200"
                      : "text-white"
                  }`}
                />
                <span>Login</span>
              </Link>

              {/* Notifikasi */}
              <div className="relative" ref={notificationRef}>
                <button
                  type="button"
                  onClick={toggleNotification}
                  className={`relative rounded-full p-2 ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-800 hover:bg-gray-200"
                      : isDarkMode
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-white hover:bg-blue-600"
                  } focus:outline-none focus:ring-2 focus:ring-white`}
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell
                    className={`h-6 w-6 ${
                      isScrolled
                        ? isDarkMode
                          ? "text-gray-200"
                          : "text-gray-800"
                        : isDarkMode
                        ? "text-gray-200"
                        : "text-white"
                    }`}
                  />
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </button>

                {/* Pop-up Notifikasi */}
                {isNotificationOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <div className="p-4">
                      <h3
                        className={`text-lg font-bold ${
                          isDarkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        Notification
                      </h3>
                      <div className="mt-2 space-y-2">
                        {notifications
                          .filter((notification) => !notification.isRead)
                          .map((notification) => (
                            <div
                              key={notification.id}
                              className={`rounded-lg p-3 ${
                                !notification.isRead
                                  ? isDarkMode
                                    ? "bg-gray-700"
                                    : "bg-gray-50"
                                  : isDarkMode
                                  ? "bg-gray-800"
                                  : "bg-white"
                              } hover:${
                                isDarkMode ? "bg-gray-700" : "bg-gray-100"
                              }`}
                            >
                              <p
                                className={`text-sm ${
                                  isDarkMode ? "text-gray-200" : "text-gray-700"
                                }`}
                              >
                                {notification.message}
                              </p>
                              <p
                                className={`text-xs ${
                                  isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                {notification.time}
                              </p>
                            </div>
                          ))}
                      </div>
                      <Link
                        href="/notification"
                        className={`mt-4 block w-full text-center text-sm ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        } hover:underline`}
                      >
                        Show All Notification
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profil */}
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={toggleProfile}
                  className={`flex rounded-full text-sm ${
                    isScrolled
                      ? isDarkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-800 hover:bg-gray-200"
                      : isDarkMode
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-white hover:bg-blue-600"
                  } focus:outline-none focus:ring-2 focus:ring-white`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  {userProfile.profilePicture ? (
                    <Image
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                      src={userProfile.profilePicture}
                      alt="Profile"
                    />
                  ) : (
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${
                        isDarkMode ? "bg-gray-700" : "bg-blue-600"
                      }`}
                    >
                      {userProfile.name.charAt(0)}
                    </div>
                  )}
                </button>

                {/* Pop-up Profil */}
                {isProfileOpen && (
                  <div
                    className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg ${
                      isDarkMode ? "bg-gray-800" : "bg-blue-50"
                    }`}
                  >
                    <div className="p-4 text-center">
                      {/* Foto Profil */}
                      <div className="flex justify-center">
                        {userProfile.profilePicture ? (
                          <Image
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full"
                            src={userProfile.profilePicture}
                            alt="Profile"
                          />
                        ) : (
                          <div
                            className={`h-20 w-20 rounded-full flex items-center justify-center text-white text-3xl font-bold ${
                              isDarkMode ? "bg-gray-700" : "bg-blue-600"
                            }`}
                          >
                            {userProfile.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      {/* Informasi Profil */}
                      <div className="mt-4">
                        <p
                          className={`text-sm font-medium ${
                            isDarkMode ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {userProfile.name}
                        </p>
                        <p
                          className={`text-xs ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {userProfile.email}
                        </p>
                      </div>
                      {/* Tombol Settings */}
                      <Link
                        href="/settings"
                        className={`mt-4 w-full flex items-center justify-center space-x-2 text-sm ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        } hover:${
                          isDarkMode ? "bg-gray-700" : "bg-blue-100"
                        } p-2 rounded-lg transition-colors`}
                      >
                        <FaCog className={isDarkMode ? "text-blue-400" : "text-blue-600"} />
                        <span>Settings</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Padding untuk konten di bawah navbar */}
      <div className="pt-16">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Navbar;