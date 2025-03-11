"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const Footer = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode

  return (
    <footer className={`${isDarkMode ? "bg-gray-800" : "bg-blue-700"} text-white py-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid untuk kolom informasi */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kolom 1: Tentang Kami */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base font-bold mb-4"
            >
              Tentang Kami
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs leading-relaxed"
            >
              MakassarProperty membantu Anda menemukan<br/>properti idaman dengan layanan terbaik.
            </motion.p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base font-bold mb-4"
            >
              Tautan Cepat
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <li><a href="/properties" className={`text-xs hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>Properties</a></li>
              <li><a href="/about" className={`text-xs hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>Tentang Kami</a></li>
              <li><a href="/contact" className={`text-xs hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>Kontak</a></li>
              <li><a href="/terms" className={`text-xs hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>Terms of Service</a></li>
            </motion.ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base font-bold mb-4"
            >
              Kontak
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <span className="text-xs">info@makassarproperty.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-white" />
                <span className="text-xs">+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-white" />
                <span className="text-xs">Jl. Contoh No. 123, Makassar</span>
              </li>
            </motion.ul>
          </div>

          {/* Kolom 4: Sosial Media */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base font-bold mb-4"
            >
              Sosial Media
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex space-x-4"
            >
              <a href="https://facebook.com" className={`hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>
                <FaFacebook className="text-lg" />
              </a>
              <a href="https://github.com" className={`hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>
                <FaGithub className="text-lg" />
              </a>
              <a href="https://instagram.com" className={`hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://linkedin.com" className={`hover:${
                isDarkMode ? "text-blue-400" : "text-blue-300"
              }`}>
                <FaLinkedin className="text-lg" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className={`border-t ${
          isDarkMode ? "border-gray-700" : "border-blue-600"
        } my-6`}></div>

        {/* Hak Cipta */}
        <div className={`text-center text-xs ${
          isDarkMode ? "text-gray-400" : "text-blue-200"
        }`}>
          &copy; 2024 MakassarProperty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;