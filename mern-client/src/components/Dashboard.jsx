import React from 'react';
import book1 from "../assets/book1.png"

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h2 className='text-5xl text-blue-600 text-center mt-10'>Admin Dashboard</h2>
        <div className="mt-6">
          <img src={book1} alt="Bookshelf" className="rounded-lg shadow-md" style={{ width: '400px' }} />
        </div>
        <div className="mt-6 max-w-lg text-center">
          <p className="text-gray-700">
            Welcome to the Admin Dashboard! Here, you can manage all aspects of the book website, including adding new books, updating book information, and moderating user interactions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
