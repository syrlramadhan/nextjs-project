import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MakassarProperty",
  description: "Website properti terbaik di Makassar",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full"> {/* Tambahkan class h-full */}
      <body className={`${inter.className} flex flex-col min-h-screen`}> {/* Gunakan Flexbox */}
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow"> {/* Konten utama akan memenuhi sisa ruang */}
            {children}
          </main>
          <Footer /> {/* Footer akan selalu di bagian bawah */}
        </ThemeProvider>
      </body>
    </html>
  );
}