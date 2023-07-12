import React, { useState } from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {getProfileData} from '../../Features/userSlice'
import Error from '../Register/Error'
import { useNavigate } from 'react-router-dom'


const Login = () => {
const [err,setErr]  = useState(null)
const [data,setData] = useState({email:"",password:""})
const url = 'http://localhost:4000/login'
const dispatch = useDispatch()
const navigate = useNavigate()


const handleChange = (e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit =async (e)=>{
e.preventDefault()
try {

  const response = await axios.post(url,data,{withCredentials:true})
dispatch(getProfileData(response.data.data))
navigate('userwelcome')
  
} catch (error) {
  setErr(error.response?.data?.msg||'something went wrong')
  
}

}
return (
  <>
  {err?<Error error={err} setError={setErr} text={'Login Failed!'} />:''}

    <div className='mt-10 space-x-48'>
      <h1></h1>
      <h1 className='font-semibold text-6xl mb-10 space-x-56'>Sign In</h1>
<form className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" type='email'  >
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name='email' type="email" value={data.email} onChange={handleChange}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" name='password' type="password" placeholder="******************" value={data.password} onChange={handleChange}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
  
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit} >
        Sign In
      </button>
    </div>
  </div>
</form>

    </div>
  </>
    
    
  )
}

export default Login
