import React from 'react'
import CreateNewPost from './createNewPost/CreateNewPost';
import { Link } from 'react-router-dom';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


 
export default function Dashboard() {

  

  return (
   <>
    <div
    className="block max-w-11/1 rounded-lg bg-white bg-cover p-6 shadow-lg dark:bg-neutral-700 "
   >
     <Link to='/Dashboard/allPosts'> <span className='  font-extrabold font-mono  text-black cursor-pointer hover:text-red-500 text-3xl'  >Go to Your posts<ArrowForwardIosSharpIcon className='text-red-800'/> </span></Link>
   
   <div className=' ml-32 mt-4'>
   
    <CreateNewPost/>
   
    

      
   </div>
  </div>
   
  
  
   </>
  );
}