import Image from 'next/image'
import React from 'react'
import sublogo from '../assets/sublogo.png'
import logo from '../assets/logo.png'
import shop from '../assets/shop.png'
import heart from '../assets/heart.png'


const Navbar = () => {
  return (<>
<div className='w-[100%] h-[4rem] bg-[#F5F5F5] flex  justify-center gap-[85rem] items-center'>
  <Image src={sublogo} className='w-[2.4rem] h-[2.4rem]'/>
  <ul className='list-none flex items-center'>
    <li><button className='btn-nav2 text-[1.1rem]'>Find a Store</button></li>
    <li><button className='btn-nav2 text-[1.1rem]'>Help</button></li>
    <li><button className='btn-nav3 text-[1.1rem]'>Join us</button></li>
    <li><button className='btn-nav text-[1.1rem]'>Sign Up</button></li>

  </ul>
</div>


<div className='flex items-center justify-center gap-[17rem] w-[100%] h-[6rem]' >
<Image src={logo} className='w-[5.8rem] h-[2rem]'/>

<div>
  <ul className='flex list-none items-center gap-12'>
    <li className='text-3xl'>News And Featured</li>
    <li className='text-3xl'>Mens</li>
    <li className='text-3xl'>Womens</li>
    <li className='text-3xl'>Kids</li>
    <li className='text-3xl'>Sale</li>
    <li className='text-3xl'>SNKR</li>

  </ul>
</div>

<div className='flex items-center gap-[2rem]'>
  <input type="text" className='text-[1.2rem] bg-[#F5F5F5] w-[16rem] p-[0.8rem] rounded-2xl' placeholder='search here'/>
  <Image src={shop} className='w-[1.6rem] h-[1.6rem]'/>
  <Image src={heart} className='w-[1.6rem] h-[1.6rem]'/>

</div>

</div>
</>
  )
}

export default Navbar