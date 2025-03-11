"use client";

import { useTheme } from "@/context/ThemeContext"; // Import useTheme
import Recents from "@/components/Recents"; // Pastikan path komponen Recents benar

const Properties = () => {
  const { isDarkMode } = useTheme(); // Ambil state dark mode

  return (
    <>
      <section className={`w-full ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container mx-auto"> {/* Gunakan container dan mx-auto untuk posisi tengah */}
          <div className="">
            <Recents />
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;