import React from 'react'
import BannerCard from './BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
     <div className='md:w-1/2 space-y-8 h-full'>
        <h2 className='text-5xl font-bold leading-snug text-black '>Buy and Sell your Books<span className='text-blue-700'> For the Best Prices
            </span> </h2>
        <p className='md:w-4/5 font-semibold hover:text-blue-500'>
        Ready to dive into the world of books? Sign up for a free account today and start buying and selling with ease. Whether you're an avid reader, a student, or someone looking to declutter, BookMeter offers the perfect solution for all your book needs. Stay updated with our latest arrivals and special offers by subscribing to our newsletter. Together, let's celebrate the joy of reading and sharing books!
            <div>
                <input type = "search" name="search" id= "search" placeholder = "Search a book" className='py-2 px-2 rounded-s-sm outline-none mt-6'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </p>
     </div>
     <div>
        <BannerCard/>
     </div>
     </div>
    </div>
  )
}

export default Banner