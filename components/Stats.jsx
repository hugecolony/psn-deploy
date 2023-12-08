import React from "react";
export default function Stats() {
    return(
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
  <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center bg-orange-500 rounded-lg px-4 py-6 md:py-8 lg:py-12 text-6xl font-extrabold text-gray-800 md:mb-6 lg:text-6xl">Stats</h2>

    </div>
    


    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">

      <div className="flex flex-col items-center md:p-4">
        <div className="text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">200</div>
        <div className="text-sm font-semibold sm:text-base">Brands</div>
      </div>
  
      <div className="flex flex-col items-center md:p-4">
        <div className="text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">500+</div>
        <div className="text-sm font-semibold sm:text-base">Products</div>
      </div>


      <div className="flex flex-col items-center md:p-4">
        <div className="text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">1000+</div>
        <div className="text-sm font-semibold sm:text-base">Customers</div>
      </div>
      
      <div className="flex flex-col items-center md:p-4">
        <div className="text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">100+</div>
        <div className="text-sm font-semibold sm:text-base">Distributors</div>
      </div>
    
    </div>
  </div>
</div>
    );
}

