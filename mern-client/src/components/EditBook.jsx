import React, { useState } from 'react'
import {useLoaderData,useParams} from 'react-router-dom'
import {Label, TextInput, Select, Textarea, Button} from 'flowbite-react'
const EditBook = () => {
  const {id}=useParams();
  const {booktitle,authorname,imageurl,category,bookdescription,bookpdfurl}=useLoaderData();

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

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }


    const handleUpdate=(e)=>{
        e.preventDefault();
        const form =e.target;

        const booktitle=form.booktitle.value;
        const authorname=form.authorname.value;
        const imageurl=form.imageurl.value;
        const category=form.category.value;
        const bookdescription=form.bookdescription.value;
        const bookpdfurl=form.bookpdfurl.value;

        const updateBookObject={bookpdfurl,bookdescription,category,imageurl,booktitle,authorname}
        console.log(updateBookObject);

        // data to db

        fetch(`http://localhost:5000/book/${id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(updateBookObject)
        }

        ).then(res=> res.json()).then(data=>{
            alert("Books Updated Successfully");
            form.reset();
        })
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>
            <form  onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="booktitle" value="Book Title" />
                        </div>
                        <TextInput id="booktitle" name="booktitle" type="text" placeholder="Book name" required defaultValue={booktitle} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authoname" value="Author Name" />
                        </div>
                        <TextInput id="authorname" name="authorname" type="text" placeholder="Author name" required defaultValue={authorname}/>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageurl" value="Book Image URL" />
                        </div>
                        <TextInput id="imageurl" name="imageurl" type="text" placeholder="Book image URL" required defaultValue={imageurl} />
                    </div>
                </div>
                <div className='lg:w-1/2'>

                    <div className="mb-2 block">
                        <Label htmlFor="inputState" value="Book Category" />
                    </div>

                    <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                        {
                            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                        }
                    </Select>
                </div>

                <div>
                    <div className='mb-2 block'>
                            <Label
                            htmlFor='bookDescription'
                            value='book Description'
                            />
                    </div>

                    <Textarea
                        id='bookdescription'
                        name='book Description'
                        placeholder='Write book Description'
                        required
                        rows={4}  
                        className='w-full'
                        defaultValue={bookdescription}
                     />
                </div>


                {/* pdf */}

                <div>
                    <div className='mb-2 block'>
                            <Label
                            htmlFor='bookPDFUrl'
                            value='book PDF Url'
                            />
                    </div>

                    <TextInput
                        id='bookpdfurl'
                        name='book PDF Url'
                        placeholder='book PDF Url'
                        required
                        type='text'
                        defaultValue={bookpdfurl} 
                     />
                </div>
                <Button type='submit' className='mt-5 text-black'>
                    Update Book
                </Button>

            </form>
        </div>
    );
  
}

export default EditBook