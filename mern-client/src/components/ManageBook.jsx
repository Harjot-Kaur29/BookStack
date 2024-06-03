import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Book Deleted Successfully");
        fetchBooks(); // Fetch books again to update the list after deletion
      })
      .catch(error => console.error('Error deleting book:', error));
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Book Name</th>
              <th className="px-4 py-2">Author Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Prices</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, index) => (
              <tr key={book._id} className={(index % 2 === 0 ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900")}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{book.booktitle}</td>
                <td className="border px-4 py-2">{book.authorname}</td>
                <td className="border px-4 py-2">{book.category}</td>
                <td className="border px-4 py-2">$10</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className='text-blue-600 hover:text-blue-900 mr-2'
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className='text-red-600 hover:text-red-900'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBook;
