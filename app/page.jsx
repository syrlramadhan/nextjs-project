"use client";

import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import { motion } from "framer-motion";
import RecentsHome from "@/components/RecentsHome";

export default function Home() {
  const { isDarkMode } = useTheme(); // Ambil state dark mode

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className={`${isDarkMode ? "bg-gray-900" : "bg-blue-700"} py-16 flex-grow`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-3xl font-extrabold ${
              isDarkMode ? "text-white" : "text-white"
            } sm:text-4xl md:text-5xl`}
          >
            Find The Perfect Rental
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-4 text-lg text-white"
          >
            Discover the perfect property that suits your needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 space-x-4"
          >
            <a
              href="/properties"
              className={`inline-block ${
                isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-blue-700 hover:bg-blue-100"
              } px-6 py-3 rounded-lg font-semibold transition duration-300`}
            >
              Browse Properties
            </a>
            <a
              href="/properties/add"
              className={`inline-block ${
                isDarkMode ? "bg-blue-800 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"
              } px-6 py-3 rounded-lg font-semibold transition duration-300`}
            >
              List Your Property
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${isDarkMode ? "bg-gray-800" : "bg-white"} py-10`}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-blue-700"
          } mb-6`}>
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-blue-50"
              } p-6 rounded-lg shadow-md`}
            >
              <h3 className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-blue-700"
              } mb-2`}>
                Wide Selection
              </h3>
              <p className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Explore thousands of properties across various locations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-blue-50"
              } p-6 rounded-lg shadow-md`}
            >
              <h3 className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-blue-700"
              } mb-2`}>
                Easy Booking
              </h3>
              <p className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Book your dream property with just a few clicks.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-blue-50"
              } p-6 rounded-lg shadow-md`}
            >
              <h3 className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-blue-700"
              } mb-2`}>
                Trusted Partners
              </h3>
              <p className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Work with verified property owners and agents.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* RecentsHome Section */}
      <section className={`${isDarkMode ? "bg-gray-900" : "bg-gray-50"} py-10`}>
        <div className="container-xl lg:container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-4"
          >
            <RecentsHome />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`${isDarkMode ? "bg-gray-800" : "bg-blue-700"} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Teks */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center md:text-left mb-4 md:mb-0"
            >
              <h2 className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-white"
              } mb-2`}>
                Ready to Find Your Dream Property?
              </h2>
              <p className={`text-lg ${
                isDarkMode ? "text-gray-200" : "text-white"
              }`}>
                Join thousands of satisfied users today.
              </p>
            </motion.div>

            {/* Tombol Get Started */}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="/properties"
              className={`inline-block ${
                isDarkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-white text-blue-700 hover:bg-blue-100"
              } px-6 py-3 rounded-lg font-semibold transition duration-300`}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}