import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/components/Auth/AuthProvider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Event Space",
  description: "Created by Habiba Ferdausi Ritu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <AuthProvider>
          <main>
        <Navbar/>
        {children}
        <Footer/>
        </main>
        </AuthProvider>
        </body>
    </html>
  );
}
