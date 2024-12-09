import React from 'react'
import crousel from './assets/crousel.png'
import cardone from './assets/cardone.png'
import left from './assets/left.png'
import right from './assets/right.png'
import men1 from './assets/men1.png'
import men2 from './assets/men2.png'
import men3 from './assets/men3.png'
import men4 from './assets/men4.png'
import  run from './assets/run.png'
import main from './assets/main.png'
import  l1 from './assets/l1.png'
import l2 from './assets/l2.png'
import l3 from './assets/l3.png'







import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Image from 'next/image'
const page = () => {
  return (
 <>
 
 <h1 className='text-center text-[1.7rem] mt-[2rem]'>Hello Nike App</h1>
 <p className='text-center text-[1.1rem]  mt-[0.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam.</p>
 

 <Image src={crousel}  className='mt-8'/>
<h2 className='text-[1.5rem] text-center mt-9 '>First Look</h2>
 <h1 className='text-center text-[5.6rem] '>Nike Air Max Pulse</h1>
 <p className='text-[1.5rem] text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
 —designed to push you past your limits and help you go to the max.</p>

 <div className='w-[100%] flex justify-center gap-[2rem] mt-7'>
  <button className='pt-[1rem] pl-[1.7rem] pr-[1.7rem] pb-[1rem] rounded-[3rem] bg-[black] text-[white] text-[1.4rem]'>Notify me</button>
  <button className='pt-[1rem] pl-[1.7rem] pr-[1.7rem] pb-[1rem] rounded-[3rem] bg-[black] text-[white] text-[1.4rem]'>Shop Air Max</button>

 </div>
<div className=' flex justify-between items-center pl-[2rem] pr-[2rem] mt-7'>

<h2 className='text-[2.2rem]'>Best of Air</h2>
<div className='flex item-center gap-[0.6rem]'>
  <h2 className='text-[2.2rem]'>Shop</h2>
  <Image src={left}/>
  <Image src={right}/>
  
</div>
</div>
<div className='flex gap-[2rem] pl-[2rem] pr-[2rem] mt-7'>




<div className='w-[44.1rem] h-[51rem] bg-[]'>

<Image src={cardone}/>
<div className='h-[100%] w-[100%] p-[1rem]'>
<div className='flex w-[100%] justify-between'>
<h1 className='text-[1.5rem]'>Nike Air Max</h1>
<h2 className='text-[1.5rem]'> 13 995</h2>
</div>
<h2 className='text-[#757575] text-[1.5rem]'>Womens Shoes</h2>

  </div>
 </div>


 <div className='w-[44.1rem] h-[51rem] bg-[]'>

<Image src={cardone}/>
<div className='h-[100%] w-[100%] p-[1rem]'>
<div className='flex w-[100%] justify-between'>
<h1 className='text-[1.5rem]'>Nike Air Max</h1>
<h2 className='text-[1.5rem]'> 13 995</h2>
</div>
<h2 className='text-[#757575] text-[1.5rem]'>Womens Shoes</h2>

  </div>
 </div>


 <div className='w-[44.1rem] h-[51rem] bg-[]'>

<Image src={cardone}/>
<div className='h-[100%] w-[100%] p-[1rem]'>
<div className='flex w-[100%] justify-between'>
<h1 className='text-[1.5rem]'>Nike Air Max</h1>
<h2 className='text-[1.5rem]'> 13 995</h2>
</div>
<h2 className='text-[#757575] text-[1.5rem]'>Womens Shoes</h2>

  </div>
 </div>

</div>



    <section className="py-10">
      <div className="container mx-auto px-6 md:px-12 text-start">
        {/* Featured Title */}
        <h2 className="text-lg md:text-3xl font-medium text-gray-700 mb-6">Featured</h2>

        {/* Image Section */}
        <div className="mb-8">
          <Image
            src={run} // Replace with actual image URL
            alt="Running outdoors"
            width={1344}
            height={700}
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Headline Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4 text-center ">STEP INTO WHAT FEELS GOOD</h1>
          <p className="text-gray-600 text-center">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className='w-[100%] text-center'> 
          <button className="px-6 py-3 bg-black text-white font-medium rounded-md shadow-md hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>
    </section>
 



<section className="py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-semibold mb-6">Gear Up</h2>

        <div className="flex justify-between items-end mb-4">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
            
            <FaChevronLeft/>
            <FaChevronRight />
            <span>Shop Men&apos;s</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
            <span>Shop Women&apos;s</span>
            <FaChevronLeft />
            <FaChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="text-center">
            <Image
              src={men1}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              width={500}
              height={500}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
            <p className="text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
            <p className="font-semibold">₹ 3 895</p>
          </div>

          {/* Item 2 */}
          <div className="text-center">
            <Image
              src={men2}
              alt="Nike Dri-FIT Challenger"
              width={500}
              height={500}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-lg font-medium">Nike Dri-FIT Challenger</h3>
            <p className="text-gray-600">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
            <p className="font-semibold">₹ 2 495</p>
          </div>

          {/* Item 3 */}
          <div className="text-center">
            <Image
          src={men3}
              alt="Nike Dri-FIT ADV Run Division"
              width={500}
              height={500}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-lg font-medium">Nike Dri-FIT ADV Run Division</h3>
            <p className="text-gray-600">Women&apos;s Long-Sleeve Running Top</p>
            <p className="font-semibold">₹ 5 295</p>
          </div>

          {/* Item 4 */}
          <div className="text-center">
            <Image
              src={men4}
              alt="Nike Fast"
              width={500}
              height={500}
              className="w-full object-cover mb-4"
            />
            <h3 className="text-lg font-medium">Nike Fast</h3>
            <p className="text-gray-600">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
            <p className="font-semibold">₹ 3 795</p>
          </div>
        </div>
      </div>
  
</section>







    <section className="py-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Featured Title */}
        <h2 className="text-lg md:text-3xl font-medium text-gray-700 mb-6 text-start">Don&apos;tMiss</h2>

        {/* Image Section */}
        <div className="mb-8">
          <Image
           src={main} // Replace with actual image URL
            alt="Running outdoors"
            width={1344}
            height={700}
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Headline Section */}
        <div className="mb-6 items-center">
          <h1 className="text-3xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
          <p className="text-gray-600">
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
        </div>

        {/* Shop */}
        <div>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition">
           Shop
          </button>
        </div>
      </div>
    </section>







    <section className="py-10">
      <div className="container mx-auto px-6 md:px-12 ml-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 space-y-4">
          {/* Icons Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Icons</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">Air Force 1</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Huarache</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Air Max 90</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Air Max 95</li>
            </ul>
          </div>

          {/* Shoes Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Shoes</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">All Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Custom Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Jordan Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Running Shoes</li>
            </ul>
          </div>

          {/* Clothing Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Clothing</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">All Clothing</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Modest Wear</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Hoodies & Pullovers</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Shirts & Tops</li>
            </ul>
          </div>

          {/* Kids' Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kids&apos;</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-black cursor-pointer">Infant & Toddler Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Kids&apos; Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Kids&apos; Jordan Shoes</li>
              <li className="text-gray-600 hover:text-black cursor-pointer">Kids&apos; Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>




 </>
  )
}

export default page


