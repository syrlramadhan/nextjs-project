"use client"; // Pastikan menggunakan client-side rendering untuk animasi

import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaArrowLeft, FaBuilding } from "react-icons/fa"; // Impor ikon dari react-icons
import { FcGoogle } from "react-icons/fc"; // Ikon Google berwarna
import { FaFacebook } from "react-icons/fa"; // Ikon Facebook
import { useRouter } from "next/navigation"; // Impor useRouter untuk navigasi
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const LoginPage = () => {
  const router = useRouter(); // Inisialisasi useRouter
  const { isDarkMode } = useTheme(); // Ambil state dark mode

  return (
    <div className={`min-h-screen flex flex-col ${
      isDarkMode ? "bg-gray-900" : "bg-gray-200"
    }`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Animasi awal: transparan dan bergeser ke atas
        animate={{ opacity: 1, y: 0 }} // Animasi masuk: muncul dan turun ke posisi normal
        transition={{ duration: 0.3, delay: 0.0 }} // Durasi animasi
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } shadow-sm`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Tombol Kembali */}
          <button
            onClick={() => router.back()} // Mengarahkan ke halaman sebelumnya
            className={`flex items-center ${
              isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
            }`}
          >
            <FaArrowLeft className="mr-2" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}>
            Login
          </h1>
          <div className="w-8"></div> {/* Placeholder untuk menjaga keseimbangan */}
        </div>
      </motion.div>

      {/* Card Login */}
      <div className="flex-grow flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } rounded-xl shadow-2xl p-8 border ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {/* Judul */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 mb-8" // Flex dan space-x untuk alignment
          >
            <FaBuilding className={`h-10 w-10 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`} /> {/* Ikon FaBuilding */}
            <span className={`text-xl font-bold ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}>
              MakassarProperty
            </span> {/* Teks MakassarProperty */}
          </motion.div>

          {/* Form Login */}
          <form className="space-y-6">
            {/* Input Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="email" className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Email
              </label>
              <div className="relative">
                {/* Ikon Email */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaEnvelope className={`h-5 w-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full p-3 pl-10 border ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  required
                />
              </div>
            </motion.div>

            {/* Input Password */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="password" className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Password
              </label>
              <div className="relative">
                {/* Ikon Password */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className={`h-5 w-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`} />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full p-3 pl-10 border ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  required
                />
              </div>
            </motion.div>

            {/* Tombol Login */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                type="submit"
                className={`w-full ${
                  isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
                } text-white py-2 rounded-lg font-semibold transition duration-200`}
              >
                Login
              </button>
            </motion.div>
          </form>

          {/* Pemisah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center my-6"
          >
            <div className={`flex-grow border-t ${
              isDarkMode ? "border-gray-600" : "border-gray-300"
            }`}></div>
            <span className={`mx-4 text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              OR
            </span>
            <div className={`flex-grow border-t ${
              isDarkMode ? "border-gray-600" : "border-gray-300"
            }`}></div>
          </motion.div>

          {/* Opsi Login dengan Google dan Facebook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="space-y-4"
          >
            {/* Tombol Login Google */}
            <button
              type="button"
              className={`w-full flex items-center justify-center gap-2 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
              } border py-2 rounded-lg font-semibold transition duration-200`}
            >
              <FcGoogle className="h-5 w-5" /> {/* Ikon Google berwarna */}
              Login with Google
            </button>

            {/* Tombol Login Facebook */}
            <button
              type="button"
              className={`w-full flex items-center justify-center gap-2 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600" : "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50"
              } border py-2 rounded-lg font-semibold transition duration-200`}
            >
              <FaFacebook className="h-5 w-5 text-blue-600" /> {/* Ikon Facebook berwarna */}
              Login with Facebook
            </button>
          </motion.div>

          {/* Link Sign Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-6 text-center"
          >
            <p className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Don't have an account?{" "}
              <a href="/signup" className={`${
                isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              } underline`}>
                Sign Up
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;