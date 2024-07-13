import React, { useState ,useEffect} from 'react'
import useFetch from '../useFetch'
import { Link } from 'react-router-dom';


const LatestBlog = () => {
    const [latestBlogs, setLatestBlogs] = useState([]);
    const { data: totalBlogs} = useFetch("http://localhost:8000/blogs");

    // const  start= totalBlogs.data.length;
    // const end=totalBlogs.data.length-1;
    // const res=fetch(`http://localhost:8000/blogs?_start=${start}&_end=${end}`)
    // if(res.status==200){
    //     setLatestBlog(res.data);
    // }
    // else{
    //     console.error("Something went wrong");
    // }

    useEffect(() => {
        const fetchLatestBlogs = async () => {
            if (totalBlogs && totalBlogs.length > 0) {
                const start = totalBlogs.length - 2 >= 0 ? totalBlogs.length - 2 : 0;
                const end = totalBlogs.length;
                try {
                    const response = await fetch(`http://localhost:8000/blogs?_start=${start}&_end=${end}`);
                    if (response.ok) {
                        const data = await response.json();
                        setLatestBlogs(data);
                    } else {
                        console.error("Something went wrong");
                    }
                } catch (err) {
                    console.error("Error fetching data:", err);
                }
            }
        };

        fetchLatestBlogs();
    }, [totalBlogs]);


  return (
    
        <div className="latest-blog w-[30%] hidden lg:flex flex-col gap-4 p-5" >
            <h2 className='text-2xl font-bold'>Latest Blogs</h2>
                {latestBlogs.map((blog) => (
                    <div className="latest-blog-item border-b-2 pb-2 rounded" key={blog.id}>
                       <Link to={`blog/${blog.id}`} className='hover:text-red-700 font-semibold'> 
                       <h3>{blog.title}</h3></Link> 
                       </div>
                ))}
            </div>
    
  )
}

export default LatestBlog