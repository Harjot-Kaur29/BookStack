import React, {useState} from 'react';
import { Textarea, Label, TextInput, Select, Button } from "flowbite-react";



const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
   const handleBookSubmit = (event) =>{
   event.preventDefault();
   const form = event.target;
   const booktitle = form.booktitle.value;
   const authorname = form.authorname.value;
   const imageURL = form.imageURL.value;
   const category = form.category.value;
   const bookdescription = form.bookdescription.value;
   const bookPDFURL = form.bookPDFURL.value;

   const bookObj = {
    booktitle, authorname, imageURL, category, bookdescription, bookPDFURL
   }
   console.log(bookObj)

   fetch("http://localhost:5000/upload-book", {
    method: "POST",
    headers:{
      "Content-type" : "application/json"
    },
    body: JSON.stringify(bookObj)

   }).then(res => res.json()).then(data => {
    alert("Book uploaded successfully")
    form.reset();
   })
   };



  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="booktitle" value="Book Title" />
          </div>
          <TextInput id="booktitle" name = "booktitle"  type="text" placeholder="Book name" required />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authoname" value="Author Name" />
          </div>
          <TextInput id="authorname" name = "authorname"  type="text" placeholder="Author name" required />
        </div>
      </div>
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name = "imageURL"  type="text" placeholder="Book image URl" required />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select id = "inputState" name = "category" className='w-full rounded' value = {selectedBookCategory}
          onChange = {handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key = {option} value = {option}>{option}</option>)
            }

          </Select>
        </div>
      </div>

      <div>
        <div className='mb-2 block'>
          <Label 
          htmlFor = "bookdescription"
          value = "Book Description"
          />
        </div>
        <Textarea
        id = "bookdescription"
        name = "bookdescription"
        placeholder="Write your Book Description....."
        required
        className='w-full'
      rows = {4}
        />
      </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='bookPDFURL' value = "Book Pdf URL"/>
          </div>
          <TextInput
          id = "bookPDFURL"
          name = "bookPDFURL"
          placeholder = "Book pdf url"
          required
          type = "text" 
          />
        </div>

        <Button className='bg-green-600' type = "Submit">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default Upload;
