"use client";

import Image from "next/image";
import MarqueeLogo from "@/components/MarqueeLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import { MengapaMemilihKamiDatas } from "~/static-data/MengapaMemilihKamiDatas";
import { PaketDatas } from "~/static-data/PaketDatas";
import { GaleriHomeDatas } from "~/static-data/GaleriHome";

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

export default function Home() {
  const selectedDatas = [
    ...PaketDatas.filter((data) => data.tipe === "Umrah").slice(0, 2),
    ...PaketDatas.filter((data) => data.tipe === "Haji").slice(0, 1),
  ];

  return (
    <>
      <div
        className="relative px-8 md:px-0 w-full min-h-[730px] sm:h-[90vh] 2xl:h-[80vh] bg-cover bg-center bg-no-repeat flex gap-8 flex-col items-center justify-center pt-[20vw] sm:pt-[10vw] lg:pt-[5vw] 2xl:pt-0"
        style={{
          backgroundImage: "url('/renew/hero/hero.webp')",
        }}
      >
        <div className="uppercase font-black-italic rounded-lg px-6 py-1.5 border-2 border-[#E6B948] maqbulah-grad">
          <span className="bg-gradient-to-r from-[#E6B948] to-white inline-block text-transparent bg-clip-text uppercase">
            24 tahun melayani
          </span>
        </div>

        <div className="">
          <h1 className="text-[48px] text-white leading-none text-center tracking-[-3px] block md:hidden font-light">
            Wujudkan
            <span className="font-black"> Mimpi Anda </span>
            Beribadah di Tanah Suci Bersama Kami
          </h1>
          <h1 className="text-[60px] text-white leading-none font-light text-center tracking-[-3.2px] hidden md:block">
            Berangkat Bersama
            <span className="font-semibold"> Maqbulah Tours & Travel </span>
            <br />
            Seperti Umrah Bersama Keluarga Sendiri
          </h1>
          <p className="font-regular text-[14px] md:text-[20px] text-white text-center mt-2">
            PT. Maqbulah Tours and Travel memberikan layanan perjalanan Ibadah
            Umrah sejak tahun 2000 dan resmi GOOGLE ADS 4 terdaftar sebagai
            Penyelenggara Umrah di Kementerian Agama RI.
          </p>
        </div>
        <div className="w-full md:w-fit gap-3 md:gap-8 flex flex-col md:flex-row md:text-xl md:pt-8">
          <button
            onClick={() => (window.location.href = `/paket`)}
            className="hover:bg-white rounded-xl text-white hover:text-[#E6B948] px-[72px] py-2 md:py-[12px] w-full md:w-fit border-[2px] border-white transition-colors"
          >
            pilih paket
          </button>
          <a
            href="https://wa.me/6287777214222?text=Assalamu%27alaikum%2C%20saya%20tertarik%20dengan%20paket%20haji%2Fumrah%20dari%20Maqbulah%20yang%20saya%20lihat%20di%20website.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20%3F%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:bg-white rounded-xl text-white hover:text-[#E6B948] px-5 py-2 md:py-[12px] w-full md:w-fit border-[2px] border-white transition-colors">
              mulai perjalanan ibadah anda
            </button>
          </a>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#f4f4f4] to-transparent"></div>
      </div>

      {/* LEGALITAS */}
      <div className="max-w-[1440px] w-full mx-auto px-3 text-white py-[40px] lg:py-[60px] flex max-md:flex-col max-md:items-center justify-center gap-5">
        <div className="font-black text-xl bg-[#E6B948] bg-[url('/renew/bg-motive-2.svg')] bg-repeat text-center flex flex-col gap-5 uppercase w-fit px-10 lg:px-14 py-4 lg:py-6 max-md:w-full">
          <h1>SURAT KETERANGAN UMRAH</h1>
          <div className="flex gap-5">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[247px] h-[350px] lg:w-[340px] lg:h-[483.93px]"
            >
              <SwiperSlide className="flex justify-center items-center">
                <Image
                  src={"/renew/legalitas/sk-umrah-2020-1.webp"}
                  alt=""
                  width={340}
                  height={483.93}
                  className="max-lg:w-[247px] max-lg:h-[350px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <Image
                  src={"/renew/legalitas/sk-umrah-2020-2.webp"}
                  alt=""
                  width={340}
                  height={483.93}
                  className="max-lg:w-[247px] max-lg:h-[350px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <Image
                  src={"/renew/legalitas/sk-umrah-2020-3.webp"}
                  alt=""
                  width={340}
                  height={483.93}
                  className="max-lg:w-[247px] max-lg:h-[350px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="font-black text-xl bg-[#C98920] bg-[url('/renew/bg-motive-2.svg')] bg-repeat text-center flex flex-col gap-5 uppercase w-fit px-10 lg:px-14 py-4 lg:py-6 max-md:w-full">
          <h1>SURAT KETERANGAN HAJI</h1>
          <div className="flex gap-5">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper w-[247px] h-[350px] lg:w-[340px] lg:h-[483.93px]"
            >
              <SwiperSlide className="flex justify-center items-center">
                <Image
                  src={"/renew/legalitas/sk-haji-2020-1.webp"}
                  alt=""
                  width={340}
                  height={483.93}
                  className="max-lg:w-[247px] max-lg:h-[350px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <Image
                  src={"/renew/legalitas/sk-haji-2020-2.webp"}
                  alt=""
                  width={340}
                  height={483.93}
                  className="max-lg:w-[247px] max-lg:h-[350px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* PROMO */}
      <div className="max-w-[1440px] w-full mx-auto overflow-hidden px-3">
        <div className="py-[60px] w-full flex flex-col gap-6">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121]">
              PROMO KAMI
            </h1>
            <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#212121]"></div>
          </div>
          <div className="relative 2lg:max-w-[1100px] 2lg:w-full 2lg:mx-auto">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={35}
              pagination={{
                el: "#containerForBullets",
                type: "bullets",
                bulletClass: "swiper-custom-bullet",
                bulletActiveClass: "swiper-custom-bullet-active",
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
              }}
              modules={[Pagination]}
            >
              {PaketDatas.filter((data) => data.promo)
                .slice(0, 3)
                .map((data, index) => {
                  const day = new Date(data.tanggal)
                    .getDate()
                    .toString()
                    .padStart(2, "0");
                  const month = new Date(data.tanggal)
                    .getMonth()
                    .toString()
                    .padStart(2, "0");
                  const year = new Date(data.tanggal).getFullYear().toString();

                  return (
                    <SwiperSlide key={index} className="relative group">
                      <div
                        className="w-[325px] mx-auto h-[340px] bg-cover bg-no-repeat rounded-[10px] relative"
                        style={{ backgroundImage: `url(${data.gambar})` }}
                      >
                        <Image
                          width={95}
                          height={104}
                          src="/renew/promo-tag.svg"
                          alt="Promo Tag"
                          className="absolute -right-[49px] top-6 z-20"
                        />
                      </div>
                      <div className="absolute bottom-0 max-w-[325px] w-full mx-auto left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#212121] rounded-t-[10px] w-full flex flex-col font-bold text-sm text-white px-10 py-6 transition-all duration-300">
                          <div className="flex flex-col gap-1">
                            <h3>{data.judul}</h3>
                            <p>IDR {data.total_harga}</p>
                          </div>
                          <div className="flex flex-col gap-3 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40 group-hover:pt-4 detail-information">
                            {data.durasi_hari && (
                              <div className="flex gap-3 items-center">
                                <Image
                                  width={17}
                                  height={17}
                                  src="/renew/icons/information.svg"
                                  alt="Information"
                                />
                                <p>{data.durasi_hari}</p>
                              </div>
                            )}
                            {data.tanggal && (
                              <div className="flex gap-3 items-center">
                                <Image
                                  width={17}
                                  height={17}
                                  src="/renew/icons/calender.svg"
                                  alt="Calendar"
                                />
                                {isNaN(Date.parse(data.tanggal)) ? (
                                  <p>{data.tanggal}</p>
                                ) : (
                                  <p>{`${new Date(data.tanggal)
                                    .getDate()
                                    .toString()
                                    .padStart(2, "0")} ${
                                    monthNames[
                                      new Date(data.tanggal)
                                        .getMonth()
                                        .toString()
                                        .padStart(2, "0")
                                    ]
                                  } ${new Date(
                                    data.tanggal
                                  ).getFullYear()}`}</p>
                                )}
                              </div>
                            )}

                            {data.maskapai && (
                              <div className="flex gap-3 items-center">
                                <Image
                                  width={17}
                                  height={17}
                                  src="/renew/icons/plane.svg"
                                  alt="Plane"
                                />
                                <p>{data.maskapai}</p>
                              </div>
                            )}
                            {data.tujuan.length > 0 && (
                              <div className="flex gap-3 items-center">
                                <Image
                                  width={17}
                                  height={17}
                                  src="/renew/icons/pin.svg"
                                  alt="Destination"
                                />
                                <p>{data.tujuan[0]}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          className="w-full bg-[#0A6A37] hover:bg-[#0c6335] active:bg-[#0a4d29] rounded-b-[10px] flex justify-center gap-1 items-center py-2"
                          onClick={() =>
                            (window.location.href = `/paket/${data.slug}`)
                          }
                        >
                          <p className="text-xs font-bold text-white">
                            selengkapnya
                          </p>
                          <Image
                            width={20}
                            height={12}
                            src="/renew/icons/arrow-right.svg"
                            alt="Arrow Right"
                          />
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>

      <MarqueeLogo />

      {/* PAKET HAJI & UMRAH */}
      <div
        className="bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/renew/paket/bg-paket.webp')",
        }}
      >
        <div className="paket-haji max-w-[1440px] w-full mx-auto overflow-hidden">
          <div className="py-12 lg:py-[60px] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] justify-center items-center">
              <h1 className="font-bold text-[28px] lg:text-[32px] text-[#FFF]">
                PAKET UMROH & HAJI
              </h1>
              <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#009F4B]"></div>
            </div>
            <div className="relative 2lg:max-w-[1100px] 2lg:w-full 2lg:mx-auto">
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={35}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  bulletClass: "swiper-custom-bullet",
                  bulletActiveClass: "swiper-custom-bullet-active",
                  clickable: true,
                }}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  },
                }}
                modules={[Pagination]}
              >
                {selectedDatas.map((data, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-fit lg:flex-none font-regular"
                  >
                    <div className="flex flex-col -space-y-40 items-center">
                      <div
                        className="h-[325px] w-[325px] bg-white bg-cover bg-no-repeat rounded-t-[10px]"
                        style={{ backgroundImage: `url(${data.gambar})` }}
                      ></div>
                      <div className="bg-[#0A6A37] text-center rounded-[10px] w-full flex flex-col gap-10 items-center text-sm text-white px-12 py-5 transition-all duration-300 max-w-[325px]">
                        <div className="border-white w-full border-b-[1px] pb-4">
                          <h3 className="text-xl font-bold">{data.judul}</h3>
                        </div>
                        <div className="w-full flex flex-col gap-3">
                          {data.bintang_hotel && (
                            <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                              <div className="flex gap-2 items-center">
                                <img
                                  style={{ width: "17px", height: "17px" }}
                                  src="/renew/icons/hotel.svg"
                                  alt="Hotel"
                                />
                                <p>Hotel</p>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                {[...Array(data.bintang_hotel)].map((_, i) => (
                                  <img
                                    key={i}
                                    style={{ width: "15px", height: "15px" }}
                                    src="/renew/icons/star.svg"
                                    alt="Star"
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                          {data.durasi_hari && (
                            <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                              <div className="flex gap-2 items-center">
                                <img
                                  style={{ width: "17px", height: "17px" }}
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
                                <img
                                  style={{ width: "17px", height: "17px" }}
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
                                <img
                                  style={{ width: "17px", height: "17px" }}
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
                                <img
                                  style={{ width: "17px", height: "17px" }}
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
                                <img
                                  style={{ width: "17px", height: "17px" }}
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* MENGAPA MEMILIH KAMI */}
      <div className="bg-[url('/renew/bg-motive.svg')] bg-repeat">
        <div className="max-w-[1440px] w-full mx-auto overflow-hidden">
          <div className="py-[60px] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] justify-center items-center">
              <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121] max-sm:flex max-sm:flex-col text-center">
                MENGAPA MEMILIH <span>KAMI?</span>
              </h1>
              <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#E6B948]"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white mx-auto gap-x-8 gap-y-4">
              {MengapaMemilihKamiDatas.map((item, index) => (
                <div
                  key={index}
                  className="relative transition-all hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] max-w-[310px] sm:max-w-[200px] h-fit bg-[#E6B948] bg-[url('/renew/bg-motive-2.svg')] bg-repeat flex flex-col gap-1 p-5 rounded-lg overflow-hidden"
                >
                  <h1 className="font-bold relative z-10 uppercase">
                    {item.title}
                  </h1>
                  <p className="text-xs relative z-10">{item.description}</p>
                  <Image
                    src={`/renew/mengapa/${item.image}.svg`}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="absolute -bottom-4 -right-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PAKET HALAL */}
      <div
        className="bg-center bg-cover bg-no-repeat w-full mx-auto overflow-hidden px-3"
        style={{
          backgroundImage: "url('/renew/paket/bg-paket-tour.webp')",
        }}
      >
        <div className="paket-haji max-w-[1440px] w-full mx-auto overflow-hidden">
          <div className="py-12 lg:py-[60px] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-[10px] justify-center items-center">
              <h1 className="font-bold text-[28px] lg:text-[32px] text-[#FFF]">
                PAKET HALAL TOUR
              </h1>
              <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#E6B948]"></div>
            </div>
            <div className="relative md:max-w-[745px] md:w-full md:mx-auto">
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={35}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  bulletClass: "swiper-custom-bullet",
                  bulletActiveClass: "swiper-custom-bullet-active",
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  },
                }}
                modules={[Pagination]}
              >
                {PaketDatas.filter((data) => data.tipe === "Halal")
                  .slice(0, 2)
                  .map((data, index) => (
                    <SwiperSlide
                      key={index}
                      className="w-fit lg:flex-none font-regular"
                    >
                      <div className="flex flex-col -space-y-40 items-center">
                        <div
                          className="h-[325px] w-[325px] bg-white bg-cover bg-no-repeat rounded-t-[10px]"
                          style={{ backgroundImage: `url(${data.gambar})` }}
                        ></div>
                        <div className="bg-[#C98920] text-center rounded-[10px] w-full flex flex-col gap-10 items-center text-sm text-white px-12 py-5 transition-all duration-300 max-w-[325px]">
                          <div className="border-white w-full border-b-[1px] pb-4">
                            <h3 className="text-xl font-bold">{data.judul}</h3>
                            <p className="text-sm mt-[6px]">
                              {data.tujuan.map((tujuan, i) => (
                                <span key={i}>
                                  {tujuan}
                                  {i < data.tujuan.length - 1 && " - "}
                                </span>
                              ))}
                            </p>
                          </div>
                          <div className="w-full flex flex-col gap-3">
                            {data.bintang_hotel && (
                              <div className="w-full flex !text-[13px] !font-normal items-center justify-between">
                                <div className="flex gap-2 items-center">
                                  <img
                                    style={{ width: "17px", height: "17px" }}
                                    src="/renew/icons/hotel.svg"
                                    alt="Hotel"
                                  />
                                  <p>Hotel</p>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                  {[...Array(data.bintang_hotel)].map(
                                    (_, i) => (
                                      <img
                                        key={i}
                                        style={{
                                          width: "15px",
                                          height: "15px",
                                        }}
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
                                  <img
                                    style={{ width: "17px", height: "17px" }}
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
                                  <img
                                    style={{ width: "17px", height: "17px" }}
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
                                  <img
                                    style={{ width: "17px", height: "17px" }}
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
                                  <img
                                    style={{ width: "17px", height: "17px" }}
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
                                  <img
                                    style={{ width: "17px", height: "17px" }}
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
                                className="px-10 py-1 w-full rounded-full bg-[#E6B948] hover:bg-[#cfa741] active:bg-[#b8943a] border-none"
                                onClick={() =>
                                  (window.location.href = `/paket/${data.slug}`)
                                }
                              >
                                <p className="text-sm font-light">
                                  lihat paket
                                </p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* PEMBIMBING */}
      <div className="w-full mx-auto overflow-hidden">
        <div className="py-12 lg:py-[60px] w-full flex flex-col items-center gap-6">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121]">
              PEMBIMBING
            </h1>
            <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#212121]"></div>
          </div>
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 175,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
            >
              <SwiperSlide className="max-w-fit">
                <div className="w-[210px] lg:w-[350px] h-[270px] lg:h-[450px] bg-white bg-[url('/renew/pembimbing/pembimbing_1.webp')] bg-center bg-cover bg-no-repeat rounded-xl shadow-md relative">
                  <div className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 py-1 lg:py-2 px-2 lg:px-10 rounded-xl flex flex-col text-center bg-[#212121] text-white">
                    <p className="text-nowrap font-semibold max-lg:text-sm">
                      Anggia Chrisianti
                    </p>
                    <p className="lato-light text-[10px] lg:text-sm">
                      Pembimbing
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <div className="w-[210px] lg:w-[350px] h-[270px] lg:h-[450px] bg-white bg-[url('/renew/pembimbing/pembimbing_2.webp')] bg-center bg-cover bg-no-repeat rounded-xl shadow-md relative">
                  <div className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 py-1 lg:py-2 px-2 lg:px-10 rounded-xl flex flex-col text-center bg-[#212121] text-white">
                    <p className="text-nowrap font-semibold max-lg:text-sm">
                      Ustadz Ibrahim Halali, LC. MA
                    </p>
                    <p className="lato-light text-[10px] lg:text-sm">
                      Pembimbing
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <div className="w-[210px] lg:w-[350px] h-[270px] lg:h-[450px] bg-white bg-[url('/renew/pembimbing/pembimbing_3.webp')] bg-center bg-cover bg-no-repeat rounded-xl shadow-md relative">
                  <div className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 py-1 lg:py-2 px-2 lg:px-10 rounded-xl flex flex-col text-center bg-[#212121] text-white">
                    <p className="text-nowrap font-semibold max-lg:text-xs">
                      Dr. Hendra Kholid, MA
                    </p>
                    <p className="lato-light text-[10px] lg:text-sm">
                      Pembimbing
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <MarqueeLogo />

      {/* TESTIMONI */}
      <div className="w-full mx-auto overflow-hidden">
        <div className="py-12 lg:py-[60px] w-full flex flex-col items-center gap-6">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121]">
              TESTIMONI
            </h1>
            <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#212121]"></div>
          </div>
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={4}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 405,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
            >
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_1.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_2.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_3.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_4.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit group cursor-pointer">
                <div
                  className="relative"
                  onClick={() =>
                    window.open("https://youtu.be/cvfDZKCZp14", "_blank")
                  }
                >
                  <Image
                    src="/renew/testimoni/testimoni_8.webp"
                    alt=""
                    width={400}
                    height={475}
                    className="max-lg:w-[270px] max-lg:h-[320px]"
                  />
                  <svg
                    width="114"
                    height="80"
                    viewBox="0 0 114 80"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-[#FF0000] group-hover:fill-[#ac1111] transition-colors"
                  >
                    <g clip-path="url(#clip0_842_1744)">
                      <path
                        d="M111.266 12.4778C110.614 10.066 109.341 7.86731 107.574 6.10057C105.807 4.33383 103.609 3.06072 101.197 2.408C92.3675 0 56.8324 0 56.8324 0C56.8324 0 21.2955 0.0728887 12.4662 2.48089C10.0544 3.13364 7.85572 4.40683 6.08906 6.17365C4.32239 7.94047 3.0494 10.1393 2.39686 12.5511C-0.273805 28.2391 -1.30981 52.144 2.4702 67.2045C3.12281 69.6162 4.39582 71.8149 6.16248 73.5817C7.92914 75.3484 10.1278 76.6215 12.5395 77.2742C21.3689 79.6822 56.9049 79.6822 56.9049 79.6822C56.9049 79.6822 92.4404 79.6822 101.269 77.2742C103.681 76.6216 105.88 75.3485 107.647 73.5817C109.413 71.815 110.686 69.6163 111.339 67.2045C114.156 51.4942 115.024 27.604 111.266 12.4778Z"
                        fill="current"
                      />
                      <path
                        d="M45.5215 56.9154L75.0006 39.8408L45.5215 22.7661V56.9154Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_842_1744">
                        <rect width="113.78" height="80" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-fit group cursor-pointer">
                <div
                  className="relative"
                  onClick={() =>
                    window.open("https://youtu.be/m1FixVOCNBw", "_blank")
                  }
                >
                  <Image
                    src="/renew/testimoni/testimoni_9.webp"
                    alt=""
                    width={400}
                    height={475}
                    className="max-lg:w-[270px] max-lg:h-[320px]"
                  />
                  <svg
                    width="114"
                    height="80"
                    viewBox="0 0 114 80"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-[#FF0000] group-hover:fill-[#ac1111] transition-colors"
                  >
                    <g clip-path="url(#clip0_842_1744)">
                      <path
                        d="M111.266 12.4778C110.614 10.066 109.341 7.86731 107.574 6.10057C105.807 4.33383 103.609 3.06072 101.197 2.408C92.3675 0 56.8324 0 56.8324 0C56.8324 0 21.2955 0.0728887 12.4662 2.48089C10.0544 3.13364 7.85572 4.40683 6.08906 6.17365C4.32239 7.94047 3.0494 10.1393 2.39686 12.5511C-0.273805 28.2391 -1.30981 52.144 2.4702 67.2045C3.12281 69.6162 4.39582 71.8149 6.16248 73.5817C7.92914 75.3484 10.1278 76.6215 12.5395 77.2742C21.3689 79.6822 56.9049 79.6822 56.9049 79.6822C56.9049 79.6822 92.4404 79.6822 101.269 77.2742C103.681 76.6216 105.88 75.3485 107.647 73.5817C109.413 71.815 110.686 69.6163 111.339 67.2045C114.156 51.4942 115.024 27.604 111.266 12.4778Z"
                        fill="current"
                      />
                      <path
                        d="M45.5215 56.9154L75.0006 39.8408L45.5215 22.7661V56.9154Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_842_1744">
                        <rect width="113.78" height="80" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_5.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_6.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
              <SwiperSlide className="max-w-fit">
                <Image
                  src="/renew/testimoni/testimoni_7.webp"
                  alt=""
                  width={400}
                  height={475}
                  className="max-lg:w-[270px] max-lg:h-[320px]"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* GALERI */}
      <div className="max-w-[1440px] w-full mx-auto overflow-hidden">
        <div className="py-12 lg:py-[60px] w-full flex flex-col items-center gap-6">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121]">
              GALERI
            </h1>
            <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#212121]"></div>
          </div>
          <div className="flex flex-col items-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-fit">
              {GaleriHomeDatas.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0),0_3px_10px_rgb(0,0,0,0.2)] h-32 md:h-64 w-32 md:w-64 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <button
              onClick={() => (window.location.href = "/galeri")}
              className="px-3 lg:px-6 py-[6px] lg:py-3 mt-10 w-fit rounded-full bg-[#212121] hover:bg-[#1a1a1a] active:bg-[#141414] text-white border-none transition-all duration-300 ease-in-out flex gap-1 lg:gap-[10px] items-center"
            >
              <p className="text-sm lg:text-xl font-regular">lihat semua</p>
              <svg
                viewBox="0 0 24 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current w-5 lg:w-6 h-3 lg:h-4"
              >
                <path d="M18.75 8.88886H5.25C4.83 8.88886 4.5 8.49775 4.5 7.99997C4.5 7.5022 4.83 7.11108 5.25 7.11108H18.75C19.17 7.11108 19.5 7.5022 19.5 7.99997C19.5 8.49775 19.17 8.88886 18.75 8.88886Z" />
                <path d="M15 15.1112C14.9016 15.1126 14.8041 15.0896 14.7137 15.0437C14.6233 14.9977 14.542 14.9299 14.475 14.8445C14.175 14.4889 14.175 13.9378 14.475 13.5823L19.2 7.98228L14.475 2.38228C14.175 2.02673 14.175 1.47562 14.475 1.12006C14.775 0.764505 15.24 0.764505 15.54 1.12006L20.79 7.34228C21.09 7.69784 21.09 8.24895 20.79 8.60451L15.54 14.8267C15.39 15.0045 15.195 15.0934 15.015 15.0934L15 15.1112Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
