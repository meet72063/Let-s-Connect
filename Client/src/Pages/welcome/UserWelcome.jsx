import React from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Link,useNavigate } from 'react-router-dom';


const UserWelcome = () => {
  const profileData = useSelector((store)=>store.user.profileData)
  const {createdAt,email,firstName,lastName,updatedAt,_id} = profileData
  return (

    <>
    <div className="w-full h-42 overflow-y-scroll no-scrollbar bg-[url(https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg?w=826&t=st=1688748417~exp=1688749017~hmac=76f19c6689845bd5ae34aaf934937cfcf71063b6aa81254b31031b1108feacfc)] h-screen" >
    <h2 className="mb-2 mt-0 text-4xl font-medium font-mono leading-tight text-red-500 ml-96 pl-48  pt-5 ">
     Welcome {firstName}
    </h2>
    <div className='font-serif text-white mt-32'>
       <div className='ml-6'>
         You have to write the book that wants to be written...
      <h1 className='font-extralight'>Let be your thought Free.....</h1>
       </div>
    
      
        <img src='https://thumbs.dreamstime.com/b/young-woman-writing-post-her-blog-laptop-table-top-view-creative-collage-panorama-young-woman-writing-post-her-blog-185083467.jpg' className='float-right rounded-sm'  />
        <Link to='/Dashboard'> <h1 className='ml-10 pt-48 font-extrabold font-mono  text-blue-2000 cursor-pointer hover:text-red-500 text-3xl' >Let's Begin <ArrowForwardIosSharpIcon className='text-white'/> </h1>
        </Link>
     
       
    
    </div>

    </div>
    
   
     
  
  
    </>
   
      
              
  )
}

export default UserWelcome
                            