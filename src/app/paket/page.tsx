"use client";

import { useState } from "react";
import Image from "next/image";
import { PaketDatas } from "~/static-data/PaketDatas";

export default function HajiUmrahPackages() {
  const [selectedTipe, setSelectedTipe] = useState("ALL");

  const handleTipeChange = (tipe: string) => {
    setSelectedTipe(tipe);
  };

  const filteredData =
    selectedTipe === "ALL"
      ? PaketDatas
      : PaketDatas.filter((item) => item.tipe === selectedTipe);

  return (
    <div>
      <section className="h-[300px] md:h-[425px] flex items-center justify-center bg-[url('/renew/halaman-paket/bg-hero.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] md:text-[64px] text-white text-center pt-28 md:pt-[15%] !leading-none !md:leading-normal">
            PAKET <br className="md:hidden block" />
            UMRAH & HAJI
          </h1>
          <img
            className="w-[80%] h-auto mx-auto"
            src="/renew/page-title-line.svg"
            alt="Page Title Line"
          />
        </div>
      </section>
      <section className="min-h-screen py-14">
        <div className="flex flex-col items-center justify-center gap-14">
          <div className="w-fit rounded-[10px] bg-[#D9D9D9] px-[7px] py-[5px] flex gap-3 md:text-sm transition-all">
            <button
              onClick={() => handleTipeChange("ALL")}
              className={`state-btn px-4 md:px-5 py-1.5 rounded-[10px] ${
                selectedTipe === "ALL" ? "clicked-btn" : "not-clicked"
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => handleTipeChange("Haji")}
              className={`state-btn px-4 py-1.5 rounded-[10px] ${
                selectedTipe === "Haji" ? "clicked-btn" : "not-clicked"
              }`}
            >
              HAJI
            </button>
            <button
              onClick={() => handleTipeChange("Umrah")}
              className={`state-btn px-4 py-1.5 rounded-[10px] ${
                selectedTipe === "Umrah" ? "clicked-btn" : "not-clicked"
              }`}
            >
              UMRAH
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-10 lg:gap-x-16">
            {filteredData.map((data, index) => (
              <div
                key={index}
                className={`w-fit font-regular card-${data.tipe}`}
              >
                <div className="rounded-[10px] overflow-hidden flex flex-col -space-y-40">
                  <div
                    className="h-[325px] w-[325px] bg-white bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${data.gambar})` }}
                  ></div>
                  <div className="bg-[#212121] text-center rounded-[10px] w-full flex flex-col gap-10 items-center text-sm text-white px-12 py-5 transition-all duration-300 max-w-[325px]">
                    <div className="border-white w-full border-b-[1px] pb-4">
                      <h3 className="text-xl font-bold">{data.judul}</h3>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      {data.bintang_hotel && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/hotel.svg"
                              alt="Hotel"
                            />
                            <p>Hotel</p>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            {Array.from(
                              { length: data.bintang_hotel },
                              (_, i) => (
                                <Image
                                  key={i}
                                  width={15}
                                  height={15}
                                  src="/renew/icons/star.svg"
                                  alt="Star"
                                />
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {data.durasi_hari && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/time.svg"
                              alt="Duration"
                            />
                            <p>Durasi Hari</p>
                          </div>
                          <p className="flex items-center justify-center gap-1">
                            {data.durasi_hari}
                          </p>
                        </div>
                      )}
                      {data.masa_tunggu && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/hourglass.svg"
                              alt="Masa Tunggu"
                            />
                            <p>Masa Tunggu</p>
                          </div>
                          <p className="flex items-center justify-center gap-1">
                            {data.masa_tunggu}
                          </p>
                        </div>
                      )}
                      {data.keberangkatan && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/pin.svg"
                              alt="Keberangkatan"
                            />
                            <p>Keberangkatan</p>
                          </div>
                          <p className="flex items-center justify-center gap-1">
                            {data.keberangkatan}
                          </p>
                        </div>
                      )}
                      {data.kursi_tersedia && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/people.svg"
                              alt="Kursi Tersedia"
                            />
                            <p>Kursi Tersedia</p>
                          </div>
                          <p className="flex items-center justify-center gap-1">
                            {data.kursi_tersedia}
                          </p>
                        </div>
                      )}
                      {data.maskapai && (
                        <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                          <div className="flex gap-2 items-center">
                            <Image
                              width={17}
                              height={17}
                              src="/renew/icons/plane.svg"
                              alt="Maskapai"
                            />
                            <p>Maskapai</p>
                          </div>
                          <p className="flex items-center justify-center gap-1">
                            {data.maskapai}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 w-full">
                      <div className="-space-y-1 w-full">
                        <p className="text-xs">harga mulai dari</p>
                        <p className="text-xl !font-semibold">
                          {data.total_harga}
                        </p>
                      </div>
                      <div>
                        <button
                          className="px-10 py-1 w-full rounded-full bg-[#009F4B] hover:bg-[#008f44] active:bg-[#007f3c] border-none"
                          onClick={() =>
                            (window.location.href = `/paket/${data.slug}`)
                          }
                        >
                          <p className="text-sm font-light">lihat paket</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
