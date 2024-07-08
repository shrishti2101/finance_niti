import React, { useState } from 'react'
import useFetch from '../useFetch';
const CreateBlog = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const {data:blogs,postBlog}=useFetch("http://localhost:8000/blogs");
   const  handleSubmit = (event) =>{
    event.preventDefault();
    console.log('Blog object:', blogs);
    const date= new Date().toLocaleDateString() ;
    const time =new Date().toLocaleTimeString();
    const blog={title,content,date,time};
    postBlog(blog);
      setTitle("");
        setContent("");
      alert("Blog Created");
   }
            return (
                <>
                <h2 className='flex items-center justify-center text-2xl leading-loose'>Add a New Blog</h2>
                  <form onSubmit={handleSubmit} method='POST' className='mt-3'>
                  {/* <label className='flex w-[100%] gap-4 items-center'>
                    Title:
                    
                  </label> */}
                  <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}  placeholder='Title' className='w-[100%] border-2 p-3 mb-5' />
                  <br />
                  {/* <label>
                    Content:
                    
                  </label> */}
                  <textarea placeholder="Content" value={content} onChange={(event) => setContent(event.target.value)} rows={6} color={20} className='w-[100%] border-2 p-3 mb-5'/>
                  <br />
                  <button type="submit" className='p-[8px] px-[10px]'>Create Blog</button>
                </form>
 
                </>
             
                
                
              )
   }
   



export default CreateBlog