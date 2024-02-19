import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AuthProvider from "@/components/Auth/AuthProvider";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Event Space",
  description: "Created by Habiba Ferdausi Ritu",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      
      <body>
        <main>
        <AuthProvider>
    <Navbar />
    {children}
    <Footer />
</AuthProvider>
        </main>
      </body>
    </html>
  );
}
