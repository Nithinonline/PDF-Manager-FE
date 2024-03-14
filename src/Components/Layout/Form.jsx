import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { server } from '../../server';
const Form = () => {

  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)
  const [user, setUser] = useState(null)


  //getting user deatils from local storage
  useEffect(() => {
    const data = localStorage.getItem('user');
    const userData = JSON.parse(data);
    setUser(userData);
  }, []);


  //Function which sends a request for pdf upload
  const handleSubmit = (e) => {
    e.preventDefault()

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    };

    const newForm = new FormData();
    newForm.append('file', file);
    newForm.append('title', title);
    if (!file || !title) {
      return toast.error("All Fields required")
    }
    axios
      .post(`${server}/add/${user._id}`, newForm, config)
      .then((res) => {
        window.location.reload()
        setTitle('')
        setFile(null)
        toast.success("PDF uploaded successfully")
      })
      .catch((err) => {
        toast.error(err.message)
        console.log(err)
      });
  };

//for handling file input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
  }



  return (
    <>
      <div className="bg-slate-200 dark:bg-gray-800 p-6 rounded-md shadow-md w-[70vw] mx-auto mt-[10vh]  ">
        <div className='flex justify-center mb-7'>
          <h1 className='text-[20px] font-'>UPLOAD A NEW PDF</h1>
        </div>
        <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PDF Title</label>
        <input
          type="text"
          id="title"
          aria-describedby="helper-text-explanation"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
        />

        <label htmlFor="file-input" className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
        <label htmlFor="file-input" className={`flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-md text-sm font-medium text-gray-750 bg-white hover:bg-gray-50 cursor-pointer`}>
          <span>
            {file ? file.name : "Select a PDF"}
          </span>
          <input type="file" name='file' id='file-input' accept='.pdf' onChange={handleFileInputChange} className='sr-only' />
        </label>
        <div className='flex justify-center'>
          <button
            type="button"
            className="text-white bg-blue-700 mt-6 md:mt-10 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
            onClick={(e) => handleSubmit(e)}
          >
            Upload
          </button>
        </div>

      </div>

    </>
  )
}

export default Form