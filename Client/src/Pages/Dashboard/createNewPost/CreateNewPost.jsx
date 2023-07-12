import React, { useState } from 'react'
import { Textarea, Button, IconButton,Input } from "@material-tailwind/react";
import Error from '../../Register/Error';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewPost = () => {
  const [postData,setPostData] = useState({title:'',content:'',author:''})
    const [err,setErr] = useState(null)
    const [btn,setBtn] = useState(true)
    const navigate = useNavigate()

    const onChangeHandler = (e)=>{
      setPostData({...postData,[e.target.name]:e.target.value})
    }

    const onSubmitHandler=async()=>{
      try {
        await axios.post('http://localhost:4000/newPost', postData,{withCredentials:true})
        setPostData({title:'',content:'',author:''})
        navigate(0)
        setBtn(true)
      } catch (error) {
        console.log(error)
        setErr(error.response.data.msg||'Oops something went wrong!')
      }
    }


  return (

    <div>
      {err?<Error error={err} setError={setErr} text={'Failed!'} />:''}
       <div className="mt-10 space-x-48 h-screen w-5/6 ">
        {btn? <Button size="lg" color="gray" className="flex items-center gap-3" onClick={()=>{setBtn(false)}}>
        Create New Post
      </Button> :<div className="relative w-[32rem] border-2 border-gray-400 rounded-2xl p-3 flex flex-col pt-5 gap-6 ml-10">
      <Input variant="static" label="Title" placeholder="Title" className='mt-3' name='title' value={postData.title} onChange={onChangeHandler} />
      <Textarea variant="static"  placeholder="content" rows={10} name='content' value={postData.content} onChange={onChangeHandler}/>
      <Input variant="static"  placeholder="Author" className='mt-2' name='author' value={postData.author} onChange={onChangeHandler} />

      <div className="w-full flex justify-between py-1.5">
       
        <div className="flex gap-2 ml-80">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            onClick={()=>{setBtn(true)}}
          >
            Cancel
          </Button>
          <Button size="sm" className="rounded-md" type='submit' onClick={onSubmitHandler}>Post</Button>
        </div>
      </div>
    </div>}
</div>
    </div>
  )
}

export default CreateNewPost

