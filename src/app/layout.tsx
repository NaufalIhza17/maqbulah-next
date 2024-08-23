import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import FloatingButton from "@/components/FloatingButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Maqbulah",
  description: "Maqbulah - Tour Travel Haji dan Umrah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-[#F4F4F4] relative h-fit`}>
        <section className="sticky top-3 z-50 w-full px-3 -mt-[372px] lg:-mt-28">
          <Navbar />
        </section>
        <section>{children}</section>
        <section id="footer">
          <Footer />
        </section>

        <FloatingButton />
      </body>
    </html>
  );
}
