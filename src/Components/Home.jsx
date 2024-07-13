// import React from 'react'
import BlogList from './BlogList'
import useFetch from '../useFetch'
import LatestBlog  from './LatestBlog';
// import EditBlog from './EditBlog';

const Home = () => {
  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
  return (
    <section className='container flex justify-center mx-auto'>
           
            {isPending && <p>Loading users...</p>}
            {error && <p>{error}</p>}
            
            {blogs && <BlogList blogs={blogs}/>}
            
         
            <LatestBlog />
           
            {/* <EditBlog /> */}
    </section>
      
    
  )
}

export default Home