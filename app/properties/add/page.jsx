"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AddProperty = () => {
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const val = type === "file" ? files[0] : value;
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
      formData.append("price", property.price);
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
    } catch (error) {
      console.error("Error adding property:", error);
      setSubmitError(error.message);
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
    { id: "price", label: "Price", type: "number" },
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Add New Property
        </motion.h2>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
          >
            Property added successfully!
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            {submitError}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  value={property[field.id]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  rows="4"
                  required
                />
              ) : field.type === "file" ? (
                <div className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200">
                  <input
                    type="file"
                    id={field.id}
                    name={field.id}
                    onChange={handleChange}
                    className="w-full"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-blue-300"
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