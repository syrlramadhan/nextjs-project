"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const AddProperty = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const [property, setProperty] = useState({
    name: "",
    type: "",
    price: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    photo: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // State untuk pratinjau gambar

  // Fungsi untuk memformat angka dengan titik setiap tiga digit dan menambahkan "Rp"
  const formatPrice = (value) => {
    // Hapus semua karakter non-angka
    const numericValue = value.replace(/\D/g, "");
    // Format dengan titik setiap tiga digit
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // Tambahkan "Rp" di awal
    return `Rp ${formattedValue}`;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let val = type === "file" ? files[0] : value;

    if (name === "price") {
      // Format nilai price dengan titik setiap tiga digit dan tambahkan "Rp"
      val = formatPrice(value);
    }

    if (type === "file" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set pratinjau gambar
      };
      reader.readAsDataURL(files[0]); // Baca file sebagai URL
    }

    setProperty({
      ...property,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append("name", property.name);
      formData.append("type", property.type);
      // Hapus "Rp" dan titik dari price sebelum mengirim
      formData.append("price", property.price.replace(/[^0-9]/g, ""));
      formData.append("address", property.address);
      formData.append("bedrooms", property.bedrooms);
      formData.append("bathrooms", property.bathrooms);
      formData.append("description", property.description);
      formData.append("photo", property.photo);

      const response = await fetch("http://localhost:5000/api/add-property", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add property");
      }

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000); // Hilangkan pesan sukses setelah 3 detik

      // Reset form
      setProperty({
        name: "",
        type: "",
        price: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        description: "",
        photo: null,
      });
      setPreviewImage(null); // Reset pratinjau gambar
    } catch (error) {
      console.error("Error adding property:", error);
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 3000); // Hilangkan pesan error setelah 3 detik
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animasi untuk setiap elemen form
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Daftar field form
  const formFields = [
    { id: "name", label: "Name", type: "text", colSpan: "col-span-2" },
    { id: "type", label: "Type", type: "text" },
    { id: "price", label: "Price", type: "text" }, // Ubah type menjadi "text" untuk memungkinkan format titik
    { id: "address", label: "Address", type: "text", colSpan: "col-span-2" },
    { id: "bedrooms", label: "Bedrooms", type: "number" },
    { id: "bathrooms", label: "Bathrooms", type: "number" },
    {
      id: "description",
      label: "Description",
      type: "textarea",
      colSpan: "col-span-2",
    },
    { id: "photo", label: "Upload Photo", type: "file", colSpan: "col-span-2" },
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      isDarkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-50 to-purple-50"
    } p-6`}>
      {/* Pop-up Pesan Sukses */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-6 right-6 ${
              isDarkMode ? "bg-green-900 text-green-200" : "bg-green-100 text-green-700"
            } border ${
              isDarkMode ? "border-green-700" : "border-green-400"
            } px-4 py-2 rounded-lg text-sm z-50`}
          >
            Property added successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop-up Pesan Error */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-6 right-6 ${
              isDarkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700"
            } border ${
              isDarkMode ? "border-red-700" : "border-red-400"
            } px-4 py-2 rounded-lg text-sm z-50`}
          >
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-4xl ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } rounded-xl shadow-2xl p-6`}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-2xl font-bold text-center ${
            isDarkMode ? "text-white" : "text-gray-800"
          } mb-6`}
        >
          Add New Property
        </motion.h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.map((field, index) => (
            <motion.div
              key={field.id}
              initial="hidden"
              animate="visible"
              variants={formItemVariants}
              transition={{ delay: index * 0.2 }}
              className={field.colSpan}
            >
              <label
                htmlFor={field.id}
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-1`}
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={property[field.id]}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-sm`}
                  rows="3"
                  required
                />
              ) : field.type === "file" ? (
                <div className={`flex flex-col items-center justify-center w-full p-2 border ${
                  isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}>
                  {previewImage ? (
                    <div className="relative w-full h-32">
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <label
                        htmlFor="photo"
                        className={`absolute inset-0 flex items-center justify-center ${
                          isDarkMode ? "bg-black bg-opacity-50" : "bg-white bg-opacity-50"
                        } text-white text-sm cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200`}
                      >
                        Change Photo
                      </label>
                    </div>
                  ) : (
                    <label
                      htmlFor="photo"
                      className={`cursor-pointer ${
                        isDarkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-700"
                      } border ${
                        isDarkMode ? "border-gray-500" : "border-gray-500"
                      } px-3 py-1 rounded-lg hover:${
                        isDarkMode ? "bg-gray-500" : "bg-gray-200"
                      } transition duration-200 text-xs`}
                    >
                      Choose Photo
                    </label>
                  )}
                  <input
                    type="file"
                    id={field.id}
                    name={field.id}
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={property[field.id]}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-sm`}
                  required
                />
              )}
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={formItemVariants}
            transition={{ delay: formFields.length * 0.2 }}
            className="col-span-2"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 rounded-lg transition duration-200 disabled:${
                isDarkMode ? "bg-blue-400" : "bg-blue-300"
              } text-sm`}
            >
              {isSubmitting ? "Submitting..." : "Add Property"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddProperty;