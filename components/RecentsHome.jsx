"use client";

import { useState, useEffect } from 'react';
import { faBath, faBed, faLocationDot, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const RecentsHome = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data untuk contoh saat tidak terhubung ke database
  const dummyData = [
    {
      type: "Rumah",
      title: "Jual Rumah Mewah Lokasi Strategis Pusat Kota",
      price: "2750000000", // Harga tanpa format
      imgSrc: "images/properties/8.png", // Path relatif
      beds: 5,
      baths: 6,
      location: "Tamalate, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/jual-rumah-mewah-lokasi-strategis-pusat-kota-iid-922022342",
    },
    {
      type: "Rumah",
      title: "Rumah Baru 2 Lantai di Pusat Kota",
      price: "889000000", // Harga tanpa format
      imgSrc: "images/properties/9.png", // Path relatif
      beds: 5,
      baths: 6,
      location: "Tamalate, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/rumah-baru-2-lantai-di-pusat-kota-iid-921012393",
    },
    {
      type: "Rumah",
      title: "Butuh dana cepat, dijual rumah tengah kota",
      price: "18500000000", // Harga tanpa format
      imgSrc: "images/properties/10.png", // Path relatif
      beds: 5,
      baths: 6,
      location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
      link: "https://www.olx.co.id/item/butuh-dana-cepatdijual-rumah-tengah-kota-iid-921469260",
    },
  ];

  // Fungsi untuk memformat harga dengan "Rp" dan titik setiap tiga digit
  const formatPrice = (price) => {
    return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  // Fungsi untuk memilih tiga data random dari array
  const getRandomProperties = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random()); // Acak data
    return shuffled.slice(0, count); // Ambil sejumlah data yang diinginkan
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        // Pilih tiga data random dari database
        const randomProperties = getRandomProperties(data, 3);
        setProperties(randomProperties);
        setError(null); // Reset error jika fetch berhasil
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError(error.message); // Set error message
        setProperties(dummyData); // Gunakan dummy data jika fetch gagal
      } finally {
        setIsLoading(false); // Set loading to false setelah fetch selesai
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <section className={`px-4 py-12 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container-xl lg:container mx-auto">
          <h2 className={`text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-blue-700"
          } mb-8 text-center`}>
            Recent Properties
          </h2>
          {isLoading ? (
            <div className={`text-center ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Loading properties...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className={`${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      {/* Perbaikan path gambar */}
                      <img
                        src={
                          error
                            ? property.imgSrc // Gunakan path relatif dari dummy data
                            : `http://localhost:5000${property.photo}`
                        }
                        alt={property.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      <div className="p-6">
                        <div className="mb-4">
                          <span className={`text-sm ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          } font-semibold`}>
                            {property.type}
                          </span>
                          <h3 className={`text-xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          } mt-2`}>
                            {property.title}
                          </h3>
                        </div>
                        <div className={`${
                          isDarkMode ? "text-blue-400" : "text-blue-700"
                        } font-bold text-lg mb-4`}>
                          {formatPrice(property.price)} {/* Format harga */}
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
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faRulerCombined} className={`h-4 ${
                              isDarkMode ? "text-blue-400" : "text-blue-600"
                            }`} />
                            <span>2000 sqft</span> {/* Contoh ukuran */}
                          </div>
                        </div>

                        {/* Lokasi */}
                        <div className={`flex items-center text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        } mb-1`}>
                          <FontAwesomeIcon icon={faLocationDot} className={`h-4 ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          } mr-2`} />
                          <span>{property.address}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tombol Details */}
                    <div className="p-6 pt-4">
                      <a
                        href={property.link}
                        className={`block w-full ${
                          isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
                        } text-white text-center py-2 rounded-lg transition duration-300`}
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tombol View All Properties */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="/properties"
          className={`block ${
            isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
          } text-white text-center py-3 px-6 rounded-lg transition duration-300`}
        >
          View All Properties
        </a>
      </section>
    </>
  );
};

export default RecentsHome;