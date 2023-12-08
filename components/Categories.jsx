import React from "react";
import Image from "next/image";
import ISOWHEY from "../public/Categories/ISOWHEY.JPEG"
import GOLDMASS from "../public/Categories/GOLDMASS.JPEG"
import BCAA from "../public/Categories/BCAA.JPEG"
import PREWORKOUT from "../public/Categories/PREWORKOUT.JPEG"
export default function Categories() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center bg-orange-500 rounded-lg px-4 py-6 md:py-8 lg:py-12 text-6xl font-extrabold text-gray-800 md:mb-6 lg:text-6xl">Categories</h2>

    </div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 xl:gap-8">
      <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <Image src={ISOWHEY} loading="lazy" alt="ISOWHEY" className="absolute inset-0  object-cover transition duration-200 group-hover:scale-110"  width={250}/>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">ISO WHEY PROTEIN</span>
      </a>
      <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
        <Image src={GOLDMASS} loading="lazy" alt="GOLDMASS" className="absolute inset-0   object-center transition duration-200 group-hover:scale-110"  width={250} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">GOLD MASS</span>
      </a>
      <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
      <Image src={PREWORKOUT} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 object-fit transition duration-200 group-hover:scale-110" width={250}  />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">PRE WORKOUT</span>
      </a>
      <a href="#" className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
      <Image src={BCAA} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 object-fit transition duration-200 group-hover:scale-110" width={250}  />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">BCAA</span>
      </a>
    </div>
    <br></br>
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center bg-black rounded-lg px-4 py-6 md:py-8 lg:py-12 text-6xl font-extrabold text-slate-100 md:mb-6 lg:text-6xl">100% Authentic Products Guranteed</h2>

    </div>
  </div>
  
</div>
    );

}
