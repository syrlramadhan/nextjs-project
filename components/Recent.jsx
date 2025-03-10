"use client";

import { useState, useEffect } from 'react';
import { faBath, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const RecentsHome = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dump data untuk contoh saat tidak terhubung ke database
  const dumpData = [
    {
      id: 1,
      name: "Rumah Mewah di Pusat Kota",
      type: "Rumah",
      price: "Rp 2.750.000.000",
      photo: "8.png", // Hanya nama file, tanpa path
      bedrooms: 5,
      bathrooms: 6,
      address: "Tamalate, Makassar",
    },
    {
      id: 2,
      name: "Rumah Baru 2 Lantai",
      type: "Rumah",
      price: "Rp 889.000.000",
      photo: "9.png", // Hanya nama file, tanpa path
      bedrooms: 4,
      bathrooms: 3,
      address: "Panakkukang, Makassar",
    },
    {
      id: 3,
      name: "Butuh Dana Cepat, Dijual Rumah",
      type: "Rumah",
      price: "Rp 18.500.000.000",
      photo: "10.png", // Hanya nama file, tanpa path
      bedrooms: 6,
      bathrooms: 5,
      address: "Mariso, Makassar",
    },
  ];

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
      <section className="px-4 py-6 bg-gray-50">
        <div className="container-xl lg:container mx-auto">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-3xl font-bold text-blue-700 mb-8 text-center"
          >
            Properties
          </motion.h2>
          {isLoading ? (
            <div className="text-center text-gray-600">Loading properties...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }} // Delay animasi untuk setiap kartu
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <img
                    src={error ? `images/properties/${property.photo}` : `http://localhost:5000${property.photo}`}
                    alt={property.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-sm text-blue-600 font-semibold">
                        {property.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mt-2">
                        {property.name}
                      </h3>
                    </div>
                    <div className="text-blue-700 font-bold text-lg mb-4">
                      {property.price}
                    </div>

                    {/* Ikon Informasi */}
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBed} className="h-4 text-blue-600" />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faBath} className="h-4 text-blue-600" />
                        <span>{property.bathrooms} Baths</span>
                      </div>
                    </div>

                    {/* Lokasi */}
                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <FontAwesomeIcon icon={faLocationDot} className="h-4 text-blue-600 mr-2" />
                      <span>{property.address}</span>
                    </div>

                    {/* Tombol Details */}
                    <div className="mt-auto">
                      <a
                        href={property.link || "#"} // Gunakan link dari database atau "#" jika tidak ada
                        className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300"
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

RecentsHome.useClient = true;

export default RecentsHome;