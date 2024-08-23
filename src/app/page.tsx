"use client";

import Image from "next/image";
import MarqueeLogo from "@/components/MarqueeLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

const dummyData = [
  {
    judul: "Promo Umrah",
    total_harga: "15,000,000",
    durasi_hari: "10 Hari",
    tanggal: "2024-03-15",
    maskapai: "Garuda Indonesia",
    tujuan: [{ tujuan: "Makkah" }],
    gambar: "/renew/galeri/2017_1.webp",
    slug: "promo-umrah",
  },
  {
    judul: "Haji Plus",
    total_harga: "75,000,000",
    durasi_hari: "25 Hari",
    tanggal: "2024-07-05",
    maskapai: "Qatar Airways",
    tujuan: [{ tujuan: "Madinah" }],
    gambar: "/renew/galeri/2018_1.webp",
    slug: "haji-plus",
  },
  {
    judul: "Paket Wisata Muslim",
    total_harga: "10,000,000",
    durasi_hari: "7 Hari",
    tanggal: "2024-12-01",
    maskapai: "Emirates",
    tujuan: [{ tujuan: "Dubai" }],
    gambar: "/renew/galeri/2019_3.webp",
    slug: "wisata-muslim",
  },
];

export default function Home() {
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
          <button className="hover:bg-white rounded-xl text-white hover:text-[#E6B948] px-[72px] py-2 md:py-[12px] w-full md:w-fit border-[2px] border-white transition-colors">
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

      {/* PROMO */}
      <div className="max-w-[1440px] w-full mx-auto overflow-hidden">
        <div className="py-[60px] w-full flex flex-col gap-6">
          <div className="flex flex-col gap-[10px] justify-center items-center">
            <h1 className="font-bold text-[28px] lg:text-[32px] text-[#212121]">
              PROMO KAMI
            </h1>
            <div className="w-[160px] lg:w-[200px] h-[6px] lg:h-[10px] rounded-t-full bg-[#212121]">
              <div className="swiper-container relative pb-12 swiper-promo">
                <Swiper
                  slidesPerView="auto"
                  centeredSlides={true}
                  spaceBetween={35}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1120: {
                      slidesPerView: 1,
                      centeredSlides: false,
                    },
                  }}
                >
                  {dummyData.map((data, index) => {
                    const day = new Date(data.tanggal)
                      .getDate()
                      .toString()
                      .padStart(2, "0");
                    const month = new Date(data.tanggal)
                      .getMonth()
                      .toString()
                      .padStart(2, "0");
                    const year = new Date(data.tanggal)
                      .getFullYear()
                      .toString();

                    return (
                      <SwiperSlide
                        key={index}
                        className="swiper-slide w-fit lg:flex-none"
                      >
                        <div
                          className="relative rounded-[10px] min-w-[325px] h-[340px] bg-cover bg-no-repeat group"
                          style={{ backgroundImage: `url(${data.gambar})` }}
                        >
                          <div className="absolute bottom-0 w-full">
                            <div className="bg-[#212121] rounded-t-[10px] w-full flex flex-col lato-bold text-sm text-white px-10 py-6 transition-all duration-300">
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
                                      src="/assets/renew/icons/information.svg"
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
                                      src="/assets/renew/icons/calender.svg"
                                      alt="Calendar"
                                    />
                                    <p>{`${day} ${monthNames[month]} ${year}`}</p>
                                  </div>
                                )}
                                {data.maskapai && (
                                  <div className="flex gap-3 items-center">
                                    <Image
                                      width={17}
                                      height={17}
                                      src="/assets/renew/icons/plane.svg"
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
                                      src="/assets/renew/icons/pin.svg"
                                      alt="Destination"
                                    />
                                    <p>{data.tujuan[0].tujuan}</p>
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
                              <p className="text-xs lato-bold text-white">
                                selengkapnya
                              </p>
                              <Image
                                width={20}
                                height={12}
                                src="/assets/renew/icons/arrow-right.svg"
                                alt="Arrow Right"
                              />
                            </button>
                          </div>
                          <Image
                            width={95}
                            height={104}
                            src="/assets/renew/promo-tag.svg"
                            alt="Promo Tag"
                            className="absolute -right-[49px] top-6"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="swiper-pagination absolute bottom-0"></div>
              </div>
            </div>
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
              {items.map((item, index) => (
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
        className="bg-center bg-cover bg-no-repeat"
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
              {galeriHome.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow-[0px_5px_0px_0px_rgba(0,0,0),0_3px_10px_rgb(0,0,0,0.2)] h-32 md:h-64 w-32 md:w-64 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <button className="px-3 lg:px-6 py-[6px] lg:py-3 mt-10 w-fit rounded-full bg-[#212121] hover:bg-[#1a1a1a] active:bg-[#141414] text-white border-none transition-all duration-300 ease-in-out flex gap-1 lg:gap-[10px] items-center">
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

const galeriHome = [
  "/renew/galeri/2017_1.webp",
  "/renew/galeri/2007_1.webp",
  "/renew/galeri/2018_1.webp",
  "/renew/galeri/2000_4.webp",
  "/renew/galeri/2023_3.webp",
  "/renew/galeri/2019_3.webp",
];

const items = [
  {
    title: "Travel Resmi",
    description:
      "Maqbulah adalah travel resmi yang mempunyai izin Penyelenggara Ibadah Haji Khusus (PIHK) dan Penyelenggara Perjalanan ibadah Umrah (PPIU)",
    image: "one",
  },
  {
    title: "Pengalaman",
    description:
      "Mabqulah telah memberangkatkan jamaah ke tanah suci selama 24 tahun sejak tahun 2000 dan terus meningkatkan pelayanan",
    image: "two",
  },
  {
    title: "PEMBIMBING BERPENGALAMAN",
    description:
      "Pembimbing & Muthowwif Maqbulah memberikan pelayanan terbaik & pengalaman dalam menjalani tugasnya",
    image: "three",
  },
  {
    title: "KEMITRAAN",
    description:
      "Maqbulah memberikan kesempatan kepada alumni jamaah maqbulah untuk mendapatkan kesempatan untuk bermitra bersama kami",
    image: "four",
  },
  {
    title: "KEMUDAHAN",
    description:
      "Maqbulah akan berupaya memberikan kemudahan untuk para tamu Allah",
    image: "five",
  },
  {
    title: "KEKELUARGAAN",
    description:
      "Maqbulah mengedepankan kekeluargaan, kekompakan, dan keharmonisan setiap jamaah kami.",
    image: "six",
  },
  {
    title: "JADWAL PASTI",
    description:
      "Maqbulah memberikan jadwal umrah haji yang insyallah pasti berangkat",
    image: "seven",
  },
  {
    title: "SESUAI SYARIAT",
    description:
      "Maqbulah melaksanakan umrah & haji sesuai yang diajarkan oleh Rasulullah SAW atau tuntutan sunnah",
    image: "eight",
  },
];
