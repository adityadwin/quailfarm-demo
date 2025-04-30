// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar"; // Pastikan path import benar

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cimahpar Quail Farm - Admin",
  description: "Admin Dashboard for Cimahpar Quail Farm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#cbcad1]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          {/* --- Ubah margin kiri agar responsif --- */}
          <main className="flex-1 p-6 md:p-8 ml-20 lg:ml-64 transition-all duration-300">
            {" "}
            {/* ml-20 default, lg:ml-64 */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
