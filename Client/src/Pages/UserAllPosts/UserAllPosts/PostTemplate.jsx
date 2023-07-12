import { Link, useNavigate } from "react-router-dom"
import { Button } from "@material-tailwind/react";
import axios from "axios";



const PostTemplate = ({title,CreatedAt,author,content,id}) => {
  
  const navigate = useNavigate()

  const handleDelete = async()=>{
    await axios.delete(`http://localhost:4000/post/${id}`,{withCredentials:true})
    navigate(0)
  }

  return (
    <div className="container my-24 mx-auto md:px-6 text-black border-red-400 pt-2 flex items-center border-2">
   
    <section className="mb-32">
      
  
      <div className="mb-6 flex items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vjzwZaBf6bKmbl7I00WbZ9RPOlriawksgQ&usqp=CAU" className="mr-2 h-8 rounded-full" alt="avatar"
          loading="lazy" />
        <div>
          <span> Published by </span>
          <Link to='/Dashboard/profile' className=" hover:text-blue-400 font-semibold capitalize underline-offset-4 cursor-pointer" >{author||'Anonymous'}</Link>
        </div>
      </div>
  
      <h1 className="mb-6 text-3xl font-bold">
        {title}
      </h1>
  
      <p>
       {content}
      </p>
   <h1>createdAt:<u>{CreatedAt}</u> </h1>
    </section>
    <div className="flex gap-2 ">
          <Button
            size="sm"
            color="red"
            variant="text"
            className="rounded-md"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button size="sm" className="rounded-md"  onClick={()=>{navigate(`/edit/${id}`)}} >Edit</Button>
        </div>
  </div>
  )
}

export default PostTemplate
