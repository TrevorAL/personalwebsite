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
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        <Navbar />
        <main className="mx-auto min-h-screen max-w-6xl px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
