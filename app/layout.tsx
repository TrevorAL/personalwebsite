import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trevor Lachman | Software Engineer",
  description: "Personal website and portfolio for Trevor Lachman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
