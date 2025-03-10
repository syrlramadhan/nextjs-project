"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBell, FaGoogle, FaBars, FaBuilding } from "react-icons/fa";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

const Navbar = () => {
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

  // Data pengguna (contoh)
  const user = {
    name: "Syahrul Ramadhan",
    email: "105841113722@student.unismuh.ac.id",
    image: null, // Ganti dengan URL gambar profil jika ada
  };

  // Hitung jumlah notifikasi yang belum dibaca
  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  // Fungsi untuk mendapatkan huruf awalan dari nama pengguna
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fungsi untuk toggle notifikasi
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);

    // Jika pop-up notifikasi ditutup, tandai notifikasi yang ditampilkan sebagai "dibaca"
    if (isNotificationOpen) {
      setNotifications(
        notifications.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
    }
  };

  // Fungsi untuk toggle pop-up profil
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Efek untuk mendeteksi scroll
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

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full ${
          isScrolled
            ? "backdrop-blur-sm bg-white/50 shadow-lg"
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
                  isScrolled ? "text-gray-800 hover:bg-gray-200" : "text-white hover:bg-blue-600"
                } focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <span className="sr-only">Open sidebar</span>
                <FaBars
                  className={`h-6 w-6 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              </button>
              <Link href="/" className="ml-4 flex items-center">
                <FaBuilding
                  className={`h-8 w-8 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
                <span
                  className={`ml-2 hidden text-xl font-bold ${
                    isScrolled ? "text-gray-800" : "text-white"
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
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-white`}
              >
                <FaGoogle
                  className={`mr-2 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
                <span>Login</span>
              </Link>

              {/* Notifikasi */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleNotification}
                  className={`relative rounded-full p-2 ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-blue-600"
                  } focus:outline-none focus:ring-2 focus:ring-white`}
                >
                  <span className="sr-only">View notifications</span>
                  <FaBell
                    className={`h-6 w-6 ${
                      isScrolled ? "text-gray-800" : "text-white"
                    }`}
                  />
                  {/* Tampilkan jumlah notifikasi yang belum dibaca */}
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </button>

                {/* Pop-up Notifikasi */}
                {isNotificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 rounded-lg bg-white shadow-lg">
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800">Notifikasi</h3>
                      <div className="mt-2 space-y-2">
                        {notifications
                          .filter((notification) => !notification.isRead)
                          .map((notification) => (
                            <div
                              key={notification.id}
                              className={`rounded-lg p-3 ${
                                !notification.isRead ? "bg-gray-50" : "bg-white"
                              } hover:bg-gray-100`}
                            >
                              <p className="text-sm text-gray-700">{notification.message}</p>
                              <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                          ))}
                      </div>
                      {/* Tombol "Lihat Semua Notifikasi" */}
                      <Link
                        href="/notification"
                        className="mt-4 block w-full text-center text-sm text-blue-600 hover:underline"
                      >
                        Lihat Semua Notifikasi
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profil */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleProfile}
                  className={`flex rounded-full text-sm ${
                    isScrolled
                      ? "text-gray-800 hover:bg-gray-200"
                      : "text-white hover:bg-blue-600"
                  } focus:outline-none focus:ring-2 focus:ring-white`}
                >
                  <span className="sr-only">Open user menu</span>
                  {user.image ? (
                    <Image
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                      src={user.image}
                      alt="Profile"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {getInitials(user.name)}
                    </div>
                  )}
                </button>

                {/* Pop-up Profil */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-lg">
                    <div className="p-4">
                      {/* Bagian Informasi Profil */}
                      <div className="flex flex-col items-center space-y-3">
                        {/* Foto Profil atau Huruf Awalan */}
                        <div className="flex justify-center">
                          {user.image ? (
                            <Image
                              width={80}
                              height={80}
                              className="h-20 w-20 rounded-full"
                              src={user.image}
                              alt="Profile"
                            />
                          ) : (
                            <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                              {getInitials(user.name)}
                            </div>
                          )}
                        </div>

                        {/* Nama dan Email */}
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>

                      {/* Opsi Profil */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="sync" className="form-checkbox" />
                          <label htmlFor="sync" className="text-sm text-gray-700">Sync is on</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="customize" className="form-checkbox" checked />
                          <label htmlFor="customize" className="text-sm text-gray-700">Customize profile</label>
                        </div>
                        <Link
                          href="/profile/edit"
                          className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
                        >
                          Manage your Google Account
                        </Link>
                        <button
                          onClick={toggleProfile}
                          className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
                        >
                          Close this profile
                        </button>
                      </div>
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