import React from "react";
import Image from "next/image";

import WP from "../public/WP.JPEG"
import GOLDMASS from "../public/Categories/GOLDMASS.JPEG"
import ISOWHEY from "../public/Categories/ISOWHEY.JPEG"

export default function Products() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image src={WP} width={600} height={500}/>
        </div>
      </div>

      <div className="md:pt-8">
        <p className="text-center font-bold text-orange-500 md:text-left">BIOBOLICS</p>

        <h1 className="mb-4 text-center text-6xl font-bold text-gray-800 sm:text-6xl md:mb-6 md:text-left">Whey Protein</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Biobolics® WHEY contains 25 grams of fast absorbing & premium protein per serving derived from Biobolics Multi Source Protein Blend . This low fat, lactose reduced formula is not only an excellent source of high quality dietary protein, it also yields a balanced ratio of Whey Protein micro fractions.

Bio WHEY is excellent for anyone leading an active lifestyle and can be enjoyed anytime of the day, especially between meals as a high protein snack and immediately following exercise. BIO WHEY is a must for the active individual and elite athlete seeking to accelerate their gains!

Available in mouth-watering Chocolate, Strawberry, Banana and Vanilla and Choco-Bueno flavors in 2.27kg (5Lbs) size
        </p>

       </div>
    </div>
  </div>

  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      

      <div className="md:pt-8">
        <p className="text-center font-bold text-orange-500 md:text-left">BIOBOLICS</p>

        <h1 className="mb-4 text-center text-6xl font-bold text-gray-800 sm:text-6xl md:mb-6 md:text-left">Mass Gainer</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Biobolics® Gold Mass Gainer is a specially formulated, delicious, high-calorie-dense premium weight gain supplement formula specifically designed to support mass & muscle growth, making it the perfect supplement for athletes and bodybuilders looking to add size and mass. Each serving provides a whooping 1080 calories and 50 grams of high-quality protein from the Biobolics Gold Multi-Source Protein Blend*.

Additionally, it contains 200g+ of clean and quality carbohydrates, essential for sustained energy, athletic performance, and overall muscle building*. Additionally, our Gold Mass Gainer is non-GMO and gluten-free.

The product comes in delicious Chocolate Milk Shake, Strawberry, and Vanilla Milk Shake flavors and is available in 2.27kg (5Lbs) and 5.44kg (12Lbs) sizes.      </p>

       </div>
       <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image src={GOLDMASS} width={600} height={500}/>
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <Image src={ISOWHEY} width={600} height={500}/>
        </div>
      </div>

      <div className="md:pt-8">
        <p className="text-center font-bold text-orange-500 md:text-left">BIOBOLICS</p>

        <h1 className="mb-4 text-center text-6xl font-bold text-gray-800 sm:text-6xl md:mb-6 md:text-left">ISO WHEY</h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        Biobolics® ISO-WHEY 100% Hydrolyzed Protein Isolate is an advanced formula featuring 0 FAT, 0 SUGAR and LOW CARBS. A single serving of Biobolics ® ISO-Whey contains 5.5g of BCAA’s and 25 grams of Fast Absorbing Protein.

Biobolics® ISO-WHEY is Gluten Free, Easy to Digest, and can be enjoyed anytime of day as a high protein snack, especially between meals and following exercise. Simply mix Biobolics® Nutrition’s ISO-WHEY in water, juice or your favorite drink, using the scoop or with a shaker.

Great for Active Lifestyles, Biobolics® ISO WHEY mixes instantly, tastes great and is available in delicious Chocolate, Vanilla, Strawberry and Cherry Limeade Flavors.
        </p>

       </div>
    </div>
  </div>
  
        </div>

        
    );
}

