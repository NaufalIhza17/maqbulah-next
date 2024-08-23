import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="h-[150px] bg-[#212121]"></div>
      <div className="h-fit">
        <div className="mx-auto max-w-[1440px] flex flex-col items-center gap-8 justify-center text-black px-8 md:px-16 py-8">
          <div className="text-center">
            <h1 className="uppercase text-2xl">Maqbulah Islamic Tours</h1>
            <h2 className="italic text-xl">
              Memiliki pengalaman lebih dari 18 tahun di dunia tours and travels
            </h2>
          </div>

          <div className="w-full h-[2px] bg-[#e2e2e2]">
            <div className="w-44 mx-auto h-4 bg-[#e2e2e2] -translate-y-full"></div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
            <div className="flex flex-col gap-8 col-span-4">
              <Image
                alt="koper"
                width={67.502}
                height={54.645}
                src={"/renew/tentang-kami/ico01.svg"}
                className="h-[100px] w-fit"
              />
              <p>
                <span className="font-bold">Terdaftar Resmi</span>
                <br />
                Resmi terdaftar di Kementrian Agama Republik Indonesia dengan
                Izin Umroh No: Haji D/559/2013 dan Umroh D/59/2014
              </p>
            </div>
            <div className="flex flex-col gap-8 col-span-4">
              <Image
                alt="koper"
                width={68}
                height={68}
                src={"/renew/tentang-kami/ico02.svg"}
                className="h-[100px] w-fit"
              />
              <p>
                <span className="font-bold">Service Berpengalaman</span>
                <br />
                Memiliki pengalaman lebih dari 18 tahun dalam melayani jasa
                pemesanan produk perjalanan wisata islami dan didukung dengan
                konfirmasi singkat dan proses yang akurat.
              </p>
            </div>
            <div className="flex flex-col gap-8 col-span-4">
              <Image
                alt="koper"
                width={186}
                height={119}
                src={"/renew/tentang-kami/sunnah.png"}
                className="h-[100px] w-fit"
              />
              <p>
                <span className="font-bold">Sunnah Rasulullah</span>
                <br />
                Resmi terdaftar di Kementrian Agama Republik Indonesia dengan
                Izin Umroh No: Haji D/559/2013 dan Umroh D/59/2014
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-16 py-8">
          <h1 className="uppercase text-center text-2xl">About Maqbulah</h1>
          <p className="text-justify">
            <span className="font-bold">MAQBULAH Islamic Tours & Travel</span>,
            adalah Biro Perjalanan Wisata Umrah dan Haji, Umroh dan Umroh Plus,
            Wisata Muslim. Berdiri pada tahun 2000 yang didirikan oleh Kel. H.
            Zainal Arifin. Kami merupakan penyelenggara ibadah Haji Khusus dan
            Umrah berizin dengan izin resmi Kementarian Agama No. 553/2016
            (Haji) dan No. 286/2017 (Umrah). PT. Maqbulah menyediakan berbagai
            Paket Ibadah Umroh dan Umroh Plus dengan harga bersaing dan program
            terbaik serta kami juga siap menyediakan Paket ibadah Umroh dengan
            harga khusus untuk program Insentive Perusahaan atau Instansi
            lainnya, program Haji Khusus / ONH PLUS, Umroh Reqular & Plus negara
            muslim, wisata muslim, dan kami juga menyediakan paket Tour
            Internasional & Domestik dan Pengurusan Dokumen, serta Paket Tour
            yang berdasarkan permintaan khusus dari Perusahaan ataupun Instansi
            Pemerintah. Kepuasan jamaah adalah tujuan dan harapan kami sebagai
            penyedia jasa travel muslim.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div>
              <p className="font-bold">Legalitas Perusahaan</p>
              Nama Perusahaan : PT. Biro Perjalanan Wisata Maqbulah
              <br />
              Nama Merk Dagang : Maqbulah Islamic Tours & Travel
              <br />
              Alamat Kantor : Jl. Warung Jati Timur No.27 Kel. Kalibata, Kec.
              Pancoran Jakarta Selatan
              <br />
              Akta Pendirian : 04/2000 Tgl.23 Feb 2000
              <br />
              Notaris : Ayu Resmiyati, SH
              <br />
              NPWP : 01.977.652.5-014.000
              <br />
              SIUP : 68/14.11/31.74/-1.858/8/2016
              <br />
              Izin Haji : No. 553/2016
              <br />
              Izin Umrah : No. 286/2017
              <br />
              SKDP : 116/27.1BU.1/31.74.08.1004/-071.562/e/2017
            </div>
            <div>
              <p className="font-bold">Pimpinan MAQBULAH</p>
              Hj. Irma Rayati : Komisaris Utama PT. Biro Perjalanan Wisata
              Maqbulah
              <br />
              H. Syarif Hidayat : Direktur Utama PT. Biro Perjalanan Wisata
              Maqbulah
              <br />
              H. Zainal Arifin : Penasehat PT. Biro Perjalanan Wisata Maqbulah
            </div>
            <div>
              <p className="font-bold">Pelayanan MAQBULAH</p>
              Pembimbing Ibadah bersertifikasi Kementerian Agama RI
              <br />
              Ust. H. Ahmad Ibrohim, Lc.,MA
              <br />
              Ust. H. Muharom, S.Ag.
              <br />
              Ust. H. Muhammad Zain Abdul Hamid
              <br />
              Tour Leader bersertifikasi
              <br />
              Guide / Muthawif berpengalaman min.5 tahun
              <br />
              Tim Handling profesional.
            </div>
            <div>
              <p className="font-bold">Visi dan Misi</p>
              Mengantarkan tamu Allah ke Tanah Suci dengan Pelayanan yang
              berkualitas.
              <br />
              Komitmen yang kuat sebagai Penyelenggara Perjalanan Ibadah Ke
              Tanah Suci.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
