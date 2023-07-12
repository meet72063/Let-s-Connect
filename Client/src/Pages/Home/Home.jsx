import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-42 overflow-y-scroll no-scrollbar bg-[url(https://wallpaperaccess.com/full/3323662.jpg)] h-screen ">
     <h2 className="text-5xl font-extrabold leading-normal  mb-2 text-white ml-96 mt-32 ">
   Lets connect
</h2>
<div className='ml-96 mt-6'>
  <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>{navigate('register')}} >Sign Up</button>
<button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={()=>{navigate('login')}} >Sign In</button>
</div>

    </div>
  )
}

export default Home
