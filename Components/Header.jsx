import React from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'


const Header = () => {

  
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex items-center justify-between'>
            <Image src={assets.logo} alt="logo" width={180} className='w-auto sm:w-[130px]' />
            <button className='flex items-center gap-2 font-medium text-gray-500  py-1 px-3 sm:py-3 sm:px-6
             border border-solid border-black  shadow-[-7px_7px_0px_#000000]'>
                Get Started

                <Image src={assets.arrow} alt="arrow" />
            </button>
        </div>
        <div className='text-center py-8'>
          <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
          <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed in culpa, nostrum temporibus veritatis quos doloremque debitis harum numquam?</p>
          <form className='flex justify-between max-w-[540px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
            <input type="email" placeholder='Eenter your Emial' className='pl-4 outline-none ' />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer'>Subscribe</button>

          </form>


        </div>

      
    </div>
  )
}

export default Header
