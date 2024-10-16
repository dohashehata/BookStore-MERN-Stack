import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../Components/BackButton.jsx"
import Spinner from "../Components/Spinner.jsx"


function ShowBooks() {
  const[book,setBook]=useState({})
  const [loading,setLoading]=useState(false)
  const {id}=useParams()
  useEffect(() => {
    setLoading(true);
    axios.get(`https://books-backend-delta.vercel.app/books/${id}`)
      .then((response) => {
        console.log(response.data); // Log the data to check the format
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);
  

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Show Book</h1>
      {loading ? (
        <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Id</span>
              <span className="text-2xl">{book._id}</span>

            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title</span>
              <span className="text-2xl">{book.title}</span>

            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author</span>
              <span className="text-2xl">{book.author}</span>

            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year</span>
              <span className="text-2xl">{book.publishYear}</span>

            </div>
            <div className="my-4">
  <span className="text-xl mr-4 text-gray-500">Created Time</span>
  <span className="text-2xl">{book.createdAt ? new Date(book.createdAt).toLocaleString() : 'N/A'}</span>
</div>
<div className="my-4">
  <span className="text-xl mr-4 text-gray-500">Last Updated Time</span>
  <span className="text-2xl">{book.updatedAt ? new Date(book.updatedAt).toLocaleString() : 'N/A'}</span>
</div>




            </div>
    )}
      
    </div>
  )
}

export default ShowBooks