"use client";

import { motion } from "framer-motion";
import RecentsHome from "@/components/RecentsHome";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16"> {/* Mengurangi padding atas dan bawah */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find The Perfect Rental
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="my-4 text-xl text-white">
            Discover the perfect property that suits your needs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 space-x-4">
            <a
              href="/properties"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Browse Properties
            </a>
            <a
              href="/properties/add"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              List Your Property
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-10"> {/* Mengurangi padding atas dan bawah */}
        <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6"> {/* Mengurangi margin bawah */}
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Mengurangi gap */}
            <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2"> {/* Mengurangi margin bawah */}
                Wide Selection
              </h3>
              <p className="text-gray-600">
                Explore thousands of properties across various locations.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2"> {/* Mengurangi margin bawah */}
                Easy Booking
              </h3>
              <p className="text-gray-600">
                Book your dream property with just a few clicks.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2"> {/* Mengurangi margin bawah */}
                Trusted Partners
              </h3>
              <p className="text-gray-600">
                Work with verified property owners and agents.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* RecentsHome Section */}
      <section className="bg-gray-50"> {/* Mengurangi padding atas dan bawah */}
        <div className="container-xl lg:container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-4">
            <RecentsHome />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 py-8"> {/* Mengurangi padding atas dan bawah */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Teks */}
            <motion.div initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:text-left mb-4 md:mb-0"> {/* Mengurangi margin bawah */}
              <h2 className="text-3xl font-bold text-white mb-2"> {/* Mengurangi margin bawah */}
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-xl text-white">
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
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}