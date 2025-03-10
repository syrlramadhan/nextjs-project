"use client";

import { useState } from "react";
import Image from "next/image";

const ProfileEditPage = () => {
  // State untuk data profil
  const [name, setName] = useState("Syahrul Ramadhan");
  const [email, setEmail] = useState("105841113722@student.unismuh.ac.id");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fungsi untuk menangani upload gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = () => {
    // Simulasi penyimpanan data
    console.log("Data yang disimpan:", { name, email, profileImage });
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className="min-h-screen bg-gray-200 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profil</h1>

        {/* Formulir Edit Profil */}
        <div className="space-y-6">
          {/* Upload Foto Profil */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile Preview"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <label className="mt-4 cursor-pointer">
              <span className="text-blue-600 hover:text-blue-500 font-medium">
                Unggah Foto Baru
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Input Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;