import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'






const BookCards = ({headline, books}) => {
   // console.log(books);
  return (
    <div className='my-16 py-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
            books.map(book=><SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                <div>
                    <img src={book.imageurl} alt="" />
                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                </div>
                <div>
                    <h3>{book.booktitle}</h3>
                    <p>{book.authorname}</p>
                </div>
                <div>
                    <p>$10.00</p>
                </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>


      </div>
    </div>
  )
}

export default BookCards