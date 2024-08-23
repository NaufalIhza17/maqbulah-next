"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageSize {
  src: string;
  width: number;
  height: number;
}

export default function Galeri() {
  const totalImages = 124;
  const images = Array.from(
    { length: totalImages },
    (_, index) => `img-${index + 1}.webp`
  );
  const [imageSizes, setImageSizes] = useState<ImageSize[]>([]);

  useEffect(() => {
    const sizes: ImageSize[] = [];

    for (let i = 1; i <= totalImages; i++) {
      const img = new window.Image();
      img.src = `/renew/galeri/img-${i}.webp`;

      img.onload = () => {
        sizes.push({
          src: img.src.replace("http://localhost:3000", ""),
          width: img.width,
          height: img.height,
        });

        if (sizes.length === totalImages) {
          setImageSizes(sizes);
        }
      };
    }
  }, [totalImages]);
  return (
    <>
      <div className="h-[150px] bg-[#212121]"></div>
      <div className="h-fit bg-white">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-4 px-8 md:px-16 py-8">
          {imageSizes.map((src, index) => {
            return (
              <div
                key={index}
                className="col-span-12 md:col-span-4 xl:col-span-3 h-fit"
              >
                <Image
                  width={src.width}
                  height={src.height}
                  className="w-full"
                  src={`${src.src}`}
                  alt={`Image ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
