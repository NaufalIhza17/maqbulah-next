"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoMaqbulahWhite from "~/renew/logo_white.png";
import MobileMenu from "~/renew/icons/mobile-menu.svg";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div
        id="navBar"
        className={`w-full relative transition-all duration-500 ease-in-out ${
          scrollPosition > 100
            ? "bg-[#C98920]/90"
            : "border-b-[3px] border-[#C98920]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="py-3 flex justify-between max-lg:px-5 lg:justify-around items-center text-white">
            <Link href="/" className="custom-logo-link" rel="home">
              <Image
                width={175}
                height={59}
                src={LogoMaqbulahWhite}
                alt="Maqbulah Umrah"
                className="custom-logo"
              />
            </Link>
            <ul className="flex gap-5 uppercase text-center font-bold max-lg:hidden">
              <li>
                <Link href="/" className="hover-underline-animation">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/paket"
                  className="hover-underline-animation"
                >
                  Umrah & Haji
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover-underline-animation">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover-underline-animation">
                  Tentang Kami
                </Link>
              </li>
            </ul>
            <Link
              href="https://wa.me/6287777214222?text=Assalamu%27alaikum%2C%20saya%20tertarik%20dengan%20paket%20haji%2Fumrah%20dari%20Maqbulah%20yang%20saya%20lihat%20di%20website.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20%3F%20Terima%20kasih."
              target="_blank"
              className="max-lg:hidden"
            >
              <button className="px-6 py-5 rounded-lg text-sm bg-[#0A6A37] hover:bg-[#08522a] transition-all font-bold">
                Mulai Perjalanan Ibadah Anda
              </button>
            </Link>
            <button
              id="mobileMenu"
              className="lg:hidden transform transition-transform duration-500 ease-in-out"
              onClick={handleMobileMenuClick}
            >
              <Image
                id="menuIcon"
                width={32}
                height={32}
                src={MobileMenu}
                alt="Menu Icon"
                className={`transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-[-90deg]" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          id="floatingNavBar"
          className={`bg-[#0A6A37]/80 rounded-md grid gap-3 uppercase text-center font-bold lg:hidden px-2 py-3 text-sm text-white w-[40%] transition-all duration-300 transform ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <Link href="/">Beranda</Link>
          <div className="h-[1px] bg-white w-full"></div>
          <Link href="/paket">Umrah & Haji</Link>
          <div className="h-[1px] bg-white w-full"></div>
          <Link href="/galeri">Galeri</Link>
          <div className="h-[1px] bg-white w-full"></div>
          <Link href="/tentang-kami">Tentang Kami</Link>
          <div className="h-[1px] bg-white w-full"></div>
          <Link
            href="https://wa.me/6287777214222?text=Assalamu%27alaikum%2C%20saya%20tertarik%20dengan%20paket%20haji%2Fumrah%20dari%20Maqbulah%20yang%20saya%20lihat%20di%20website.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20%3F%20Terima%20kasih."
            target="_blank"
          >
            <button className="py-2 rounded-md border border-white transition-all w-full">
              Mulai Perjalanan
              <br />
              Ibadah Anda
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
