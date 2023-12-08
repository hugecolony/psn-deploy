import React from "react";
import Image from "next/image";
import BBN from "../public/Brands/BBN.png"
import MT from "../public/Brands/MT.png"
import MR from "../public/Brands/MR.png"
import DY from "../public/Brands/DY.png"
export default function Brands() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div className="grid grid-cols-2 gap-6 rounded-lg bg-orange-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">

      <div className="flex justify-center text-orange-500">
       <Image src={BBN} />
      </div>


      
      <div className="flex justify-center text-orange-500">
      <Image src={MT} height={50} width={150}/>
      </div>
 


      <div className="flex justify-center text-orange-500">
      <Image src={MR} height={50} width={150}/>
      </div>
      

      <div className="flex justify-center text-orange-500">
      <Image src={DY} height={50} width={150}/>
      </div>
    
    </div>
  </div>
</div>
    );
}
