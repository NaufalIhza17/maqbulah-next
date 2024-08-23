import Image from "next/image"
import LogoMaqbulahWhite from "~/renew/logo_white.png";

export default function Footer() {
    return (
        <div className="bg-[#212121] px-3">
      <div className="max-w-[1440px] w-full mx-auto pt-10 md:pt-[60px] flex flex-col gap-8 lg:gap-32">
        <div className="flex max-lg:flex-col max-lg:gap-8 justify-between px-8 md:px-3 xl:max-w-[1280px] xl:w-full xl:mx-auto">
          <div className="flex flex-col gap-5 w-fit max-lg:mx-auto max-lg:flex-row max-lg:justify-between max-lg:w-full">
            <a href="/" className="custom-logo-link" rel="home">
              <Image
                width={175}
                height={59}
                src={LogoMaqbulahWhite}
                alt="Maqbulah Umroh"
                className="custom-logo"
              />
            </a>
            <div className="flex justify-between items-center gap-[6px]">
              <div className="flex gap-4 h-fit items-center">
                <div className="w-7 h-7 border rounded-md group hover:border-[#E6B948] transition-all flex justify-center items-center">
                  <svg
                    className="w-[22px] h-[22px] fill-current text-white group-hover:text-[#E6B948] transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                  >
                    <path d="M5.5 4.125C4.77065 4.125 4.07118 4.41473 3.55546 4.93046C3.03973 5.44618 2.75 6.14565 2.75 6.875V7.15138L11 11.594L19.25 7.15275V6.875C19.25 6.14565 18.9603 5.44618 18.4445 4.93046C17.9288 4.41473 17.2293 4.125 16.5 4.125H5.5ZM19.25 8.71338L11.3259 12.98C11.2257 13.0339 11.1137 13.0621 11 13.0621C10.8863 13.0621 10.7743 13.0339 10.6741 12.98L2.75 8.71338V15.125C2.75 15.8543 3.03973 16.5538 3.55546 17.0695C4.07118 17.5853 4.77065 17.875 5.5 17.875H16.5C17.2293 17.875 17.9288 17.5853 18.4445 17.0695C18.9603 16.5538 19.25 15.8543 19.25 15.125V8.71338Z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-7 h-7 border rounded-md group hover:border-[#E6B948] transition-all flex justify-center items-center">
                  <svg
                    className="w-[20px] h-[20px] fill-current text-white group-hover:text-[#E6B948] transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.8566 1.66675C11.7941 1.66925 12.2699 1.67425 12.6808 1.68591L12.8424 1.69175C13.0291 1.69841 13.2133 1.70675 13.4358 1.71675C14.3224 1.75841 14.9274 1.89841 15.4583 2.10425C16.0083 2.31591 16.4716 2.60258 16.9349 3.06508C17.3589 3.48153 17.6868 3.98547 17.8958 4.54175C18.1016 5.07258 18.2416 5.67758 18.2833 6.56508C18.2933 6.78675 18.3016 6.97091 18.3083 7.15841L18.3133 7.32008C18.3258 7.73008 18.3308 8.20591 18.3324 9.14341L18.3333 9.76508V10.8567C18.3353 11.4646 18.3289 12.0724 18.3141 12.6801L18.3091 12.8417C18.3024 13.0292 18.2941 13.2134 18.2841 13.4351C18.2424 14.3226 18.1008 14.9267 17.8958 15.4584C17.6868 16.0147 17.3589 16.5186 16.9349 16.9351C16.5185 17.359 16.0146 17.6869 15.4583 17.8959C14.9274 18.1017 14.3224 18.2417 13.4358 18.2834L12.8424 18.3084L12.6808 18.3134C12.2699 18.3251 11.7941 18.3309 10.8566 18.3326L10.2349 18.3334H9.14411C8.536 18.3356 7.92788 18.3292 7.31995 18.3142L7.15828 18.3092C6.96045 18.3018 6.76267 18.2931 6.56495 18.2834C5.67828 18.2417 5.07328 18.1017 4.54161 17.8959C3.98564 17.6868 3.48198 17.3589 3.06578 16.9351C2.64157 16.5187 2.31337 16.0148 2.10411 15.4584C1.89828 14.9276 1.75828 14.3226 1.71661 13.4351L1.69161 12.8417L1.68745 12.6801C1.67208 12.0724 1.66514 11.4646 1.66661 10.8567V9.14341C1.66431 8.53558 1.67042 7.92775 1.68495 7.32008L1.69078 7.15841C1.69745 6.97091 1.70578 6.78675 1.71578 6.56508C1.75745 5.67758 1.89745 5.07341 2.10328 4.54175C2.31302 3.98525 2.6418 3.48128 3.06661 3.06508C3.48257 2.64137 3.98593 2.31348 4.54161 2.10425C5.07328 1.89841 5.67745 1.75841 6.56495 1.71675C6.78661 1.70675 6.97161 1.69841 7.15828 1.69175L7.31995 1.68675C7.92761 1.67194 8.53544 1.66555 9.14328 1.66758L10.8566 1.66675ZM9.99995 5.83341C8.89488 5.83341 7.83507 6.2724 7.05367 7.0538C6.27227 7.8352 5.83328 8.89501 5.83328 10.0001C5.83328 11.1052 6.27227 12.165 7.05367 12.9464C7.83507 13.7278 8.89488 14.1667 9.99995 14.1667C11.105 14.1667 12.1648 13.7278 12.9462 12.9464C13.7276 12.165 14.1666 11.1052 14.1666 10.0001C14.1666 8.89501 13.7276 7.8352 12.9462 7.0538C12.1648 6.2724 11.105 5.83341 9.99995 5.83341ZM9.99995 7.50008C10.3283 7.50003 10.6534 7.56464 10.9567 7.69022C11.26 7.81581 11.5356 7.99991 11.7678 8.23202C12 8.46413 12.1842 8.7397 12.3099 9.04299C12.4356 9.34628 12.5003 9.67136 12.5004 9.99966C12.5004 10.328 12.4358 10.6531 12.3102 10.9564C12.1846 11.2597 12.0005 11.5354 11.7684 11.7676C11.5363 11.9997 11.2607 12.1839 10.9575 12.3096C10.6542 12.4353 10.3291 12.5 10.0008 12.5001C9.33774 12.5001 8.70185 12.2367 8.23301 11.7678C7.76417 11.299 7.50078 10.6631 7.50078 10.0001C7.50078 9.33704 7.76417 8.70115 8.23301 8.23231C8.70185 7.76347 9.33774 7.50008 10.0008 7.50008M14.3758 4.58341C14.0995 4.58341 13.8346 4.69316 13.6392 4.88851C13.4439 5.08386 13.3341 5.34881 13.3341 5.62508C13.3341 5.90135 13.4439 6.1663 13.6392 6.36165C13.8346 6.557 14.0995 6.66675 14.3758 6.66675C14.652 6.66675 14.917 6.557 15.1123 6.36165C15.3077 6.1663 15.4174 5.90135 15.4174 5.62508C15.4174 5.34881 15.3077 5.08386 15.1123 4.88851C14.917 4.69316 14.652 4.58341 14.3758 4.58341Z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-7 h-7 border rounded-md group hover:border-[#E6B948] transition-all flex justify-center items-center">
                  <svg
                    className="w-[22px] h-[22px] fill-current text-white group-hover:text-[#E6B948] transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                  >
                    <path d="M9.16671 13.7499L13.9242 10.9999L9.16671 8.24992V13.7499ZM19.7634 6.57242C19.8825 7.00325 19.965 7.58075 20.02 8.31408C20.0842 9.04742 20.1117 9.67992 20.1117 10.2299L20.1667 10.9999C20.1667 13.0074 20.02 14.4833 19.7634 15.4274C19.5342 16.2524 19.0025 16.7841 18.1775 17.0133C17.7467 17.1324 16.9584 17.2149 15.7484 17.2699C14.5567 17.3341 13.4659 17.3616 12.4575 17.3616L11 17.4166C7.15921 17.4166 4.76671 17.2699 3.82254 17.0133C2.99754 16.7841 2.46587 16.2524 2.23671 15.4274C2.11754 14.9966 2.03504 14.4191 1.98004 13.6858C1.91587 12.9524 1.88837 12.3199 1.88837 11.7699L1.83337 10.9999C1.83337 8.99242 1.98004 7.51659 2.23671 6.57242C2.46587 5.74742 2.99754 5.21575 3.82254 4.98659C4.25337 4.86742 5.04171 4.78492 6.25171 4.72992C7.44337 4.66575 8.53421 4.63825 9.54254 4.63825L11 4.58325C14.8409 4.58325 17.2334 4.72992 18.1775 4.98659C19.0025 5.21575 19.5342 5.74742 19.7634 6.57242Z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-7 h-7 border rounded-md group hover:border-[#E6B948] transition-all flex justify-center items-center">
                  <svg
                    className="w-[20px] h-[20px] fill-current text-white group-hover:text-[#E6B948] transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.89 2H17.12C17.61 2 18 2.39 18 2.88V17.12C18 17.6 17.61 18 17.12 18H13.04V11.8H15.12L15.43 9.39H13.04V7.85C13.04 7.15 13.24 6.67 14.24 6.67H15.52V4.51C15.3 4.48 14.54 4.42 13.66 4.42C11.81 4.42 10.55 5.54 10.55 7.61V9.39H8.46V11.8H10.55V18H2.89C2.65568 18 2.43081 17.9076 2.26418 17.7429C2.09756 17.5781 2.00263 17.3543 2 17.12V2.88C2 2.39 2.4 2 2.89 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-7 max-lg:justify-center">
            <div className="flex flex-col md:max-w-[230px]">
              <p className="font-light text-[#E6B948]">Tentang Kami</p>
              <p className="font-bold text-white pt-[10px] md:pt-5 text-justify">
                MAQBULAH Islamic Tours & Travel, adalah Biro Perjalanan Wisata
                Umrah dan Haji, Umroh dan Umroh Plus, Wisata Muslim. Berdiri
                pada tahun 2000 yang didirikan oleh Kel. H. Zainal Arifin. Kami
                merupakan penyelenggara ibadah Haji Khusus dan Umrah berizin
                dengan izin resmi Kementarian Agama. Kami telah memberangkatkan
                lebih dari 25.000 jamaah menuju baitullah.
              </p>
            </div>
            <div className="flex flex-col md:max-w-[160px]">
              <p className="font-light text-[#E6B948]">Alamat Kantor</p>
              <p className="font-bold text-white pt-[10px] md:pt-5">Jakarta</p>
              <p className="text-white">
                Jakarta Jl. Warung Jati Timur No.27 Kalibata-Pancoran Jakarta
                Selatan 12790
              </p>
            </div>
            <div className="flex flex-col md:max-w-[160px]">
              <p className="font-light text-[#E6B948]">Jam Operasional</p>
              <p className="font-bold text-white pt-[10px] md:pt-5">Senin s.d Jumat</p>
              <p className="text-white">10.00 - 17.00</p>
              <p className="font-bold text-white pt-[6px] md:pt-3">Sabtu & Minggu</p>
              <p className="text-white">Janji Temu / Online</p>
            </div>
            <div className="flex flex-col md:max-w-[160px]">
              <p className="font-light text-[#E6B948]">Site Map</p>
              <ul className="font-bold text-white pt-[10px] md:pt-5 flex flex-col gap-[6px] md:gap-3">
                <li>Home</li>
                <li>About Us</li>
                <li>Umroh & Haji</li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-8 md:px-3 text-white flex max-sm:flex-col max-sm:text-center max-sm:gap-3 justify-between py-7 border-t-[3px] border-[#C98920]">
          <div className="flex max-sm:justify-center gap-4 sm:gap-8">
            <a href="#" className="hover:underline">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:underline">
              Syarat & Ketentuan
            </a>
          </div>
          <p>Copyright ©️ 2024 - Maqbulah</p>
        </div>
      </div>
    </div>
    )
};
