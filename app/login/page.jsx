"use client"; // Pastikan menggunakan client-side rendering untuk animasi

import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Impor ikon dari react-icons
import { FcGoogle } from "react-icons/fc"; // Ikon Google berwarna
import { FaFacebook } from "react-icons/fa"; // Ikon Facebook

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      {/* Card Login */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 border border-gray-200"
      >
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Login
        </motion.h2>

        {/* Form Login */}
        <form className="space-y-6">
          {/* Input Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              {/* Ikon Email */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-400" // Tambahkan text-gray-700
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              {/* Ikon Password */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-400" // Tambahkan text-gray-700
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
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
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
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
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
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition duration-200"
          >
            <FcGoogle className="h-5 w-5" /> {/* Ikon Google berwarna */}
            Login with Google
          </button>

          {/* Tombol Login Facebook */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition duration-200"
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
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;