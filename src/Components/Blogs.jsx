import React from 'react'
import useFetch from '../useFetch'
import { Link, useParams } from 'react-router-dom';
import EditBlog from './EditBlog';
import { MdDelete } from "react-icons/md";

const Blogs = () => {

  const {id}=useParams()
  const {data:blogs,ispending,error,editBlog}=useFetch(`http://localhost:8000/blogs/${id}`);
  const handleDelete=()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
      method:'DELETE'
      })
      .then(()=>{
        console.log('deleted')
        })
  }
  return (
    <section>
    {ispending && <p>Loading...</p>}

    {error && <p>{error}</p>}

    {blogs && (
        <section className='container mx-auto p-5 leading-10'>
            <h1 className='font-bold  text-4xl leading-relaxed mb-3'>{blogs.title}</h1>  
            <p>{blogs.content}</p>
            <div className='flex gap-2'>
            <EditBlog key={blogs.id} blog={blogs} updateBlog={editBlog} />
            {/* <Link to={`/EditBlog/${blogs.id}`}>Edit Blog</Link> */}
            <button onClick={handleDelete} className='flex items-center'><MdDelete/>Delete</button>
            </div>
        </section>
    )}
</section>
  )
}

export default Blogs