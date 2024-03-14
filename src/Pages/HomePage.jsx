import React from 'react'
import Form from '../Components/Layout/Form'
import Cards from '../Components/Layout/Cards'
import Navbar from '../Components/Layout/Navbar'

const HomePage = () => {
  return (
    <>
    <div className='bg-[#F3EDC8]'>
    <Navbar/>
    <Form/>
    <Cards/>
    </div>
    </>
  )
}

export default HomePage