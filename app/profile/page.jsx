"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext"; // Import useTheme

const ProfileEditPage = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data user dummy jika tidak terhubung ke API
  const [dummyUser, setDummyUser] = useState({
    name: "User Name",
    email: "useremail@example.com",
    profilePicture: null,
  });

  // Fungsi untuk mengambil data user dari API
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/me`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setProfileImage(data.profilePicture);
      setPreviewImage(data.profilePicture);
      setError(null);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error.message);
      // Gunakan data dummy jika terjadi error
      setName(dummyUser.name);
      setEmail(dummyUser.email);
      setProfileImage(dummyUser.profilePicture);
      setPreviewImage(dummyUser.profilePicture);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Fungsi untuk menangani upload gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      if (profileImage) {
        formData.append("profilePicture", profileImage);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/update`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      alert("Profil berhasil diperbarui!");
      setProfileImage(data.profilePicture);
      setPreviewImage(data.profilePicture);

      // Perbarui data dummy jika tidak terhubung ke API
      if (error) {
        setDummyUser({
          name,
          email,
          profilePicture: previewImage,
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Gagal memperbarui profil. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen text-gray-600 ${
      isDarkMode ? "bg-gray-900" : "bg-gray-200"
    } py-8`}>
      <div className={`max-w-4xl mx-auto ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-lg p-8`}>
        {/* Header */}
        <h1 className={`text-3xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-800"
        } mb-6`}>
          Edit Profil
        </h1>

        {/* Formulir Edit Profil */}
        <div className="space-y-6">
          {/* Upload Foto Profil */}
          <div className="flex flex-col items-center">
            <div className={`relative w-32 h-32 rounded-full overflow-hidden border-4 ${
              isDarkMode ? "border-blue-600" : "border-blue-500"
            }`}>
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile Preview"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className={`w-full h-full ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                } flex items-center justify-center text-white text-4xl font-bold`}>
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <label className="mt-4 cursor-pointer">
              <span className={`${
                isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
              } font-medium`}>
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
            <label className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Nama
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          {/* Input Email */}
          <div>
            <label className={`block text-sm font-medium ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className={`px-6 py-2 ${
                isDarkMode ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-600 hover:bg-blue-500"
              } text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;