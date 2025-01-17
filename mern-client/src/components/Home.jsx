import React from 'react'
import Banner from './Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

function Home() {
  return (
   <div>
    <Banner/>
    <BestSellerBooks/>   
    <FavBook/> 
    <PromoBanner/>
    <OtherBooks/>
    <Review/>
   </div>
  )
}

export default Home
