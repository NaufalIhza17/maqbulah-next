"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PaketDatas } from "~/static-data/PaketDatas";
import { IncludeDatas } from "~/static-data/IncludeDatas";
import { ExcludeDatas } from "~/static-data/ExcludeDatas";

const monthNames: { [key: string]: string } = {
  "01": "Januari",
  "02": "Februari",
  "03": "Maret",
  "04": "April",
  "05": "Mei",
  "06": "Juni",
  "07": "Juli",
  "08": "Agustus",
  "09": "September",
  "10": "Oktober",
  "11": "November",
  "12": "Desember",
};

export default function DetailPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop();

  const matchedData = PaketDatas.find((data) => data.slug === slug);

  const isDateValid = !isNaN(Date.parse(matchedData?.tanggal || ""));
  let formattedDate = matchedData?.tanggal;

  if (isDateValid) {
    const date = new Date(matchedData?.tanggal || "");
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthNames[(date.getMonth() + 1).toString().padStart(2, "0")];
    const year = date.getFullYear().toString();
    formattedDate = `${day} ${month} ${year}`;
  }

  return (
    <div>
      <section
        style={{
          backgroundImage: `
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, #0A6A37 100%),
                    url('/renew/detail/hero.webp')
                `,
        }}
        className="h-[800px] w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-[1440px] mx-auto w-full h-full grid grid-cols-12 justify-items-center content-center place-content-center px-6 md:px-28 gap-0 md:gap-16 pt-24 md:pt-40">
          <div className="col-span-12 md:col-span-7 h-full w-full flex flex-col items-start justify-center gap-1 md:gap-4 !text-white">
            <h1 className="font-bold text-[32px] md:text-[64px] leading-[1.2]">
              {matchedData?.judul}
            </h1>

            <div className="flex gap-1 md:gap-4">
              <div className="bg-[#E6B948] py-0 md:py-2 px-4 flex items-center justify-center rounded-full">
                <Image
                  width={16}
                  height={18}
                  alt="logo"
                  className="w-[15px] md:w-[18px] h-auto"
                  src={"/renew/icons/clipboard.svg"}
                />
              </div>
              <div className="bg-[#E6B948] px-4 py-1 md:py-1.5 rounded-full">
                <p className="text-[12px] md:text-[16px] italic">
                  {formattedDate}
                </p>
              </div>
            </div>

            <p className="text-[16px] text-justify w-full hidden md:block">
              {matchedData?.deskripsi}
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 max-md:py-2 md:p-2 w-full">
            {matchedData?.gambar && (
              <Image
                width={600}
                height={600}
                alt="image"
                className="w-1/2 md:w-full max-w-full rounded-xl"
                src={matchedData.gambar}
              />
            )}
          </div>
          <p className="col-span-12 block md:hidden text-white text-justify max-md:text-sm">
            {matchedData?.deskripsi}
          </p>
        </div>
      </section>

      <section className="h-fit md:h-[220px] w-full bg-[#212121] relative overflow-hidden">
        <div
          style={{
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
          }}
          className="w-[110%] bg-[#0A6A37] hidden md:block h-44 absolute top-0 right-[50%] translate-x-1/2 -translate-y-1/2"
        ></div>

        <div className="max-w-[1440px] px-4 py-10 md:p-0 grid justify-items-center content-center grid-cols-8 gap-4 md:gap-4 h-full w-full md:w-[80%] xl:w-[60%] mx-auto">
          <div className="col-span-4 md:col-span-2 flex flex-col text-center gap-0 md:gap-1 text-white mt-0 md:mt-20">
            <p className="font-bold text-[14px] md:text-[16px]">
              Tanggal keberangkatan
            </p>
            <p className="text-[10px] md:text-[12px]">
              Tanggal yang Dikonfirmasi
            </p>
            <p className="text-[10px] md:text-[14px]">{formattedDate}</p>
          </div>
          <div className="h-8 w-[2px] bg-slate-300 mt-0 md:mt-20 hidden md:block place-self-center"></div>
          <div className="col-span-4 md:col-span-2 flex flex-col text-center gap-0 md:gap-1 text-white mt-0 md:mt-20">
            <p className="font-bold text-[14px] md:text-[16px]">
              Status Perjalanan
            </p>
            <p className="text-[10px] md:text-[12px]">Status Terkini</p>
            <p className="text-[10px] md:text-[14px]">
              {matchedData?.status_perjalanan}
            </p>
          </div>
          <div className="h-8 w-[2px] bg-slate-300 mt-0 md:mt-20 hidden md:block place-self-center"></div>
          <div className="col-span-4 md:col-span-2 flex flex-col text-center gap-0 md:gap-1 text-white mt-0 md:mt-20">
            <p className="font-bold text-[14px] md:text-[16px]">Harga (PP)</p>
            <p className="text-[10px] md:text-[12px]">Termasuk Penerbangan</p>
            <p className="text-[10px] md:text-[14px]">
              {matchedData?.harga_pp}
            </p>
          </div>
          <Image
            width={1920}
            height={13}
            alt="line"
            className="w-full h-auto absolute bottom-0 left-0"
            src="/renew/border-line.svg"
          />
        </div>
      </section>
      <section className="h-fit bg-white">
        <div className="max-w-[1440px] mx-auto h-full gap-5 md:gap-8 py-12 md:py-24 px-10 md:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch md:items-start justify-center">
          <div className="flex items-start gap-3 order-first">
            <Image
              width={18}
              height={18}
              alt="logo"
              className="hidden md:block pt-1"
              src="/renew/icons/check.svg"
            />
            <div>
              <h4 className="text-[#212121] text-[18px] font-bold border-b-[2px] border-[#212121]">
                Hal-hal yang termasuk dalam biaya tur
              </h4>
              <ul className="mt-4 text-[#C98920]">
                {IncludeDatas.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3 order-last md:order-2">
            <Image
              width={18}
              height={18}
              alt="logo"
              className="hidden md:block pt-1"
              src="/renew/icons/note.svg"
            />
            <div className="w-full">
              <h4 className="text-[#212121] text-[18px] font-bold border-b-[2px] border-[#212121] w-full">
                Rencana Perjalanan
              </h4>
              <a
                href="https://wa.me/6287777214222?text=Assalamu%27alaikum%2C%20saya%20tertarik%20dengan%20paket%20haji%2Fumrah%20dari%20Maqbulah%20yang%20saya%20lihat%20di%20website.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20%3F%20Terima%20kasih."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-nowrap px-5 py-2.5 italic text-white rounded-xl bg-[#0A6A37] mt-4 w-full">
                  ketahui lebih lanjut
                </button>
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 order-2 md:order-3">
            <Image
              width={18}
              height={18}
              alt="logo"
              className="hidden md:block pt-1"
              src="/renew/icons/cross.svg"
            />
            <div>
              <h4 className="text-[#212121] text-[18px] font-bold border-b-[2px] border-[#212121]">
                Hal-hal yang <span className="!text-[#ff0000]">tidak</span>{" "}
                termasuk dalam biaya tur
              </h4>

              <ul className="mt-4 text-[#C98920]">
                {ExcludeDatas.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
