import React from 'react';

const BookBlog = () => {
  const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      date: 'July 11, 1960',
      description: 'A novel about the serious issues of rape and racial inequality.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      date: 'June 8, 1949',
      description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      date: 'April 10, 1925',
      description: 'A novel about the American dream and the roaring twenties.'
    }
  ];

  return (
    <div className="container mx-auto p-4">
     
      <div className="space-y-4 mt-20">
        {books.map((book, index) => (
          <div key={index} className="bg-blue-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-2">by {book.author}</p>
            <p className="text-gray-600 mb-2">Published: {book.date}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBlog;
