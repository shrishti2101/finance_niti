import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  if (!blogs) return null;

  return (
    <section className='container mx-auto p-5 lg:w-[70%] w-full'>
      <div className='grid md:grid-cols-2 gap-3 place-content-around  '>
        {blogs.map((blog) => (
          <div key={blog.id} className='p-3 leading-8 border-2 rounded-[20px] shadow-[5px_5px_10px] bg-white-100 relative'>
            <Link to={`blog/${blog.id}`} className='hover:text-red-700 focus:text-red-700'>
              <h1 className='font-bold text-xl leading-[1.5]'>{blog.title}</h1>
            </Link>
            <div className='flex gap-4'>
            <p className='text-[#395651] font-black  p-[5px] rounded-[10%] bg-yellow-100'>{blog.date}</p>
            <p>{blog.time}</p>
            </div>
            <p className='overflow-hidden text-ellipsis h-[100px] whitespace-break-space'>
              {blog.content}
            </p>
            <Link to={`blog/${blog.id}`} className=' bg-[#395651] text-white p-[8px] px-[10px] rounded-[10px]'>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
