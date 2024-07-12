"use client";

import { useState } from "react";

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
    console.log("Property added:", property);
  
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
  
      console.log("Property added successfully!");
    } catch (error) {
      console.error("Error adding property:", error);
      
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Property</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 text-black"
      >
        <div className="col-span-2 mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-1 mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={property.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-1 mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-2 mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-bold mb-2"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={property.address}
            onChange={handleChange}
            className="w-full p-2 border -300 rounded-md"
            required
          />
        </div>
        <div className="col-span-1 mb-4">
          <label
            htmlFor="bedrooms"
            className="block text-gray-700 font-bold mb-2"
          >
            Bedrooms:
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-1 mb-4">
          <label
            htmlFor="bathrooms"
            className="block text-gray-700 font-bold mb-2"
          >
            Bathrooms:
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-2 mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-2 mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
            Upload Photo:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="col-span-2 mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;