import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { server } from '../../server';
import axios from "axios"
import { toast } from 'react-toastify';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("")
  const navigate = useNavigate()


//function for sending create user request
  const senderFunction = async () => {
    const res = await axios.post(`${server}/create-user`, {
      name: name,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data)
        toast.success("Acccount created successfully")
        navigate("/login")

      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message)
      });
  }

//For handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      senderFunction();
    }
  };

  //Function for form validation
  const validateForm = () => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  console.log(name, email, password)


  return (
    <>
      <div>
        <section className="bg-[#F3EDC8] dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center text-[#BF3131]  mb-6 text-2xl font-semibold  dark:text-white">
              <img className="w-8 h-8 mr-2" src="./logo2.png" alt="logo" />
              PDF-Manager
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""

                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="name" id="name" placeholder="name..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                      onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                      minLength="6"
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" className="w-full text-white bg-[blue] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={handleSubmit}>Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;