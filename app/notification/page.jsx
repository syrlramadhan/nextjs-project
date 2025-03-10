"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Impor useRouter dari next/navigation
import { FaArrowLeft } from "react-icons/fa"; // Impor ikon dari react-icons
import { motion, AnimatePresence } from "framer-motion"; // Impor framer-motion

const NotificationPage = () => {
  const router = useRouter(); // Inisialisasi useRouter

  // Dummy data notifikasi
  const notifications = [
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
    {
      id: 4,
      message: "Properti favorit Anda telah terjual.",
      time: "4 hari yang lalu",
      isRead: true,
    },
    {
      id: 5,
      message: "Pembayaran properti Anda telah berhasil.",
      time: "5 hari yang lalu",
      isRead: true,
    },
    {
      id: 6,
      message: "Ada properti baru yang sesuai dengan kriteria Anda.",
      time: "6 hari yang lalu",
      isRead: true,
    },
    {
      id: 7,
      message: "Pembayaran properti Anda telah berhasil.",
      time: "1 minggu yang lalu",
      isRead: true,
    },
    {
      id: 8,
      message: "Properti favorit Anda telah terjual.",
      time: "1 minggu yang lalu",
      isRead: true,
    },
    {
      id: 9,
      message: "Pembayaran properti Anda telah berhasil.",
      time: "2 minggu yang lalu",
      isRead: true,
    },
    {
      id: 10,
      message: "Ada properti baru yang sesuai dengan kriteria Anda.",
      time: "2 minggu yang lalu",
      isRead: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Animasi awal: transparan dan bergeser ke atas
        animate={{ opacity: 1, y: 0 }} // Animasi masuk: muncul dan turun ke posisi normal
        transition={{ duration: 0.3 }} // Durasi animasi
        className="bg-white shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()} // Mengarahkan ke halaman sebelumnya
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <FaArrowLeft className="mr-2" />
            <span className="font-medium">Kembali</span>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Notifikasi</h1>
          <div className="w-8"></div> {/* Placeholder untuk menjaga keseimbangan */}
        </div>
      </motion.div>

      {/* Daftar Notifikasi */}
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }} // Animasi awal: transparan
          animate={{ opacity: 1 }} // Animasi masuk: muncul
          transition={{ delay: 0.2, duration: 0.5 }} // Delay dan durasi animasi
          className="space-y-3"
        >
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }} // Animasi awal: transparan dan bergeser ke bawah
              animate={{ opacity: 1, y: 0 }} // Animasi masuk: muncul dan naik ke posisi normal
              transition={{ delay: index * 0.1, duration: 0.3 }} // Animasi bertahap dengan delay
              className={`rounded-lg p-4 ${
                notification.isRead ? "bg-white" : "bg-blue-50"
              } shadow-sm hover:shadow-md transition-shadow border ${
                notification.isRead ? "border-gray-100" : "border-blue-100"
              }`}
            >
              <p className="text-sm text-gray-700">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
              {!notification.isRead && (
                <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationPage;