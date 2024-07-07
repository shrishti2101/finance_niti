// import React from 'react'
import BlogList from './BlogList'
import useFetch from '../useFetch'
// import EditBlog from './EditBlog';

const Home = () => {
  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
  return (
    <section>
           
            {isPending && <p>Loading users...</p>}
            {error && <p>{error}</p>}
            {blogs && <BlogList blogs={blogs}/>}
            {/* <EditBlog /> */}
    </section>
      
    
  )
}

export default Home