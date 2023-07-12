import React from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from 'react-router-dom';




const Profile = () => {
    const profileData = useSelector((store)=>store.user.profileData)
    const {createdAt,email,firstName,lastName,updatedAt,_id} = profileData
    
    const navigate = useNavigate()

  return (
    <div>
<div className="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto text-black bg-white  shadow-xl hover:shadow">
     <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" alt=""/>
     <div className="text-center mt-2 text-3xl font-medium">{firstName} {lastName}</div>
     <div className="text-center mt-2 font-light text-sm">id:{_id}</div>
     <div className="text-center font-normal text-lg">{email}</div>
     <div className="px-6 text-center mt-2 font-light text-sm">
       <p>
         Front end Developer, avid reader. Love to take a long walk, swim..
       </p>
     </div>
     <hr className="mt-8"/>
     <div className="flex p-4">
       <div className="w-1/2 text-center">
         <span className="font-bold">user since</span>
         <h1>{createdAt} </h1>
         
       </div>
       <div className="w-0 border border-gray-300">
         
       </div>
       <div className="w-1/2 text-center">
         <span className="font-bold">last updatedAt</span> 
         <h1>{updatedAt} </h1>

       </div>
     </div>
     <button className='mt-8 bg-blue-gray-900 text-white font-mono w-full  hover:bg-black hover:text-white rounded-full' onClick={()=>{navigate('/Dashboard/editProfile')}} >Edit Profile</button>

  </div>
</div>
    </div>
  )
}

export default Profile

