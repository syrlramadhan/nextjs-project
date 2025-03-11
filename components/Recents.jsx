"use client";

import { useState, useEffect } from 'react';
import { faBath, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const Recents = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dump data untuk contoh saat tidak terhubung ke database
  const dumpData = [
    {
      id: 1,
      name: "Rumah Mewah di Pusat Kota",
      type: "Rumah",
      price: "2750000000", // Harga tanpa titik
      photo: "8.png", // Hanya nama file, tanpa path
      bedrooms: 5,
      bathrooms: 6,
      address: "Tamalate, Makassar",
    },
    {
      id: 2,
      name: "Rumah Baru 2 Lantai",
      type: "Rumah",
      price: "889000000", // Harga tanpa titik
      photo: "9.png", // Hanya nama file, tanpa path
      bedrooms: 4,
      bathrooms: 3,
      address: "Panakkukang, Makassar",
    },
    {
      id: 3,
      name: "Butuh Dana Cepat, Dijual Rumah",
      type: "Rumah",
      price: "18500000000", // Harga tanpa titik
      photo: "10.png", // Hanya nama file, tanpa path
      bedrooms: 6,
      bathrooms: 5,
      address: "Mariso, Makassar",
    },
  ];

  // Fungsi untuk memformat angka dengan titik setiap tiga digit dan menambahkan "Rp"
  const formatPrice = (price) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
        setError(null); // Reset error jika fetch berhasil
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError(error.message); // Set error message
      } finally {
        setIsLoading(false); // Set loading to false setelah fetch selesai
      }
    };

    fetchProperties();
  }, []);

  // Data yang akan ditampilkan: dari database jika tersedia, atau dump data jika error
  const displayProperties = error ? dumpData : properties;

  // Animasi untuk kartu properti
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animasi untuk judul section
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <>
      <section className={`w-full min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="w-full max-w-none px-4 py-6">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className={`text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-blue-700"
            } mb-8 text-center`}
          >
            Properties
          </motion.h2>
          {isLoading ? (
            <div className={`text-center ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Loading properties...
            </div>
          ) : (
            <div className="w-full max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }} // Delay animasi untuk setiap kartu
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col`}
                >
                  <img
                    src={error ? `images/properties/${property.photo}` : `http://localhost:5000${property.photo}`}
                    alt={property.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className={`text-sm ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } font-semibold`}>
                        {property.type}
                      </span>
                      <h3 className={`text-xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } mt-2`}>
                        {property.name}
                      </h3>
                    </div>
                    <div className={`${
                      isDarkMode ? "text-blue-400" : "text-blue-700"
                    } font-bold text-lg mb-4`}>
                      {formatPrice(property.price)} {/* Format harga dengan "Rp" dan titik */}
                    </div>

                    {/* Ikon Informasi */}
                    <div className={`flex justify-between text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } mb-4`}>
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBed} className={`h-4 ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`} />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBath} className={`h-4 ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`} />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                    </div>

                    {/* Lokasi */}
                    <div className={`flex items-center text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    } mb-6`}>
                      <FontAwesomeIcon icon={faLocationDot} className={`h-4 ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } mr-2`} />
                      <span>{property.address}</span>
                    </div>

                    {/* Tombol Details */}
                    <div className="mt-auto">
                      <a
                        href={property.link || "#"} // Gunakan link dari database atau "#" jika tidak ada
                        className={`block w-full ${
                          isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
                        } text-white text-center py-2 rounded-lg transition duration-300`}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

Recents.useClient = true;

export default Recents;