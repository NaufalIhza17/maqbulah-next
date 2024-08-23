"use client"

import Image from "next/image";
import WhatsAppButton from "~/renew/icons/whatsapp.svg";
import ArrowUpButton from "~/renew/icons/arrow-up.svg";

export default function FloatingButton() {
    return(
        <div className="sticky z-50 bottom-9 flex justify-between px-6 -mt-[36px] md:-mt-[48px]">
          <a
            href="https://wa.me/6287777214222?text=Assalamu%27alaikum%2C%20saya%20tertarik%20dengan%20paket%20haji%2Fumrah%20dari%20Maqbulah%20yang%20saya%20lihat%20di%20website.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20%3F%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="goWA" className="hover:-translate-y-1 transition-all">
              <Image
                src={WhatsAppButton}
                alt="WhatsApp"
                width={156}
                height={36}
                className="md:w-[181px] md:h-[40px] drop-shadow-lg"
              />
            </button>
          </a>
          <button
            id="goUp"
            className="hover:-translate-y-1 transition-all"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <Image
              src={ArrowUpButton}
              alt="Arrow Up"
              width={36}
              height={36}
              className="md:w-[40] md:h-[40px] drop-shadow-lg"
            />
          </button>
        </div>
    )
};
