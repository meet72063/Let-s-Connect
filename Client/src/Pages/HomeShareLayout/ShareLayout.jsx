
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';


const ShareLayout = () => {
  return (
   
   <div>

    <nav className="bg-gray-600 cursor-pointer h-10 font-semibold text-2xl items-center font-serif text-black flex justify-between pr-6 pl-6 justify-items-center">
       <div className=' flex px-3 space-x-10'>
        <h1>Let's Connect</h1>
         <Link to='/'>Home</Link>
       </div>
       <div className=' flex gap-6'>
        
        <Link to='/login'> <LoginIcon/>Login</Link>
        <Link to='/register'> <HowToRegTwoToneIcon/>SignUp</Link>

          
          
        

        </div>
       </nav>
       <Outlet/>
   </div>
   
   


     
  )
}

export default ShareLayout
