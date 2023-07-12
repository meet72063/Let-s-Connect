import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios  from 'axios'
import {useDispatch} from 'react-redux'
import {getProfileData} from '../../Features/userSlice'
import Error from '../Register/Error'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
     const [err,setErr] = useState(null)
     const profileData = useSelector((store)=>store.user.profileData)
    const {email,firstName,lastName} = profileData
    const [data,setData] = useState({firstName,lastName,email,password:''})
    const url = 'http://localhost:4000/update'

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
       
    }
 
    const handleSubmit = async(e)=>{
      e.preventDefault()
      
      try {
       const response= await axios.patch(url,data,{withCredentials:true})
       dispatch(getProfileData(response.data.user))
       navigate(-1)
       
      } catch (error) {
        setErr(error.response.data.msg)
        
      }
      
      console.log('submitted')
    }



  return (
     
    <>
      {err?<Error error={err} setError={setErr} text={'Profile Updation failed..!'} />:''}  
      <div className='mt-10 space-x-48 h-screen w-5/6'>
      <h1></h1>
      <h1 className='font-semibold text-black text-5xl mb-10 space-x-56'>Your Profile...!</h1>
<form className="w-full pt-10 max-w-sm">
<div className="flex flex-wrap -mx-3 mb-6 pl-28">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='firstName' type="text" value={data.firstName} onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='lastName' type="text" value={data.lastName} onChange={handleChange}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6 pr-9">
    <div className="md:w-1/3"> 
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" type='email'  >
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name='email' type="email" value={data.email} onChange={handleChange}/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6 pr-9">
    <div className="md:w-1/3"> 
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-password" type='password'  >
      Confirm  Password:
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder='******' id="inline-full-password" name='password' type="password" value={data.password} onChange={handleChange}/>
    </div>
  </div>
  
  <div className="md:flex md:items-center mb-6">
  
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit} >
        Save
      </button>
    </div>
  </div>
</form>

    </div>

    </>
    
  )
}

export default EditProfile

