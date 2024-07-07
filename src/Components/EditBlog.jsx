// EditBlog.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaEdit } from "react-icons/fa";

const EditBlog = ({ blog, updateBlog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleUpdateBlog = () => {
    const updatedBlog = { title, content, id: blog.id };
    updateBlog(updatedBlog);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='flex items-center gap-1'><FaEdit/>Edit Blog</button>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}
      style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                padding: '20px',
                width:'calc(90% - 10px)',
                // maxWidth:'200px',
                // height: 'calc(80% - 10px)',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                }
                }}
      >
        <h2 className='flex items-center justify-center text-2xl leading-loose'>Edit Blog</h2>
        <form className='w-[100%]'>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  className='w-[100%] border-2 p-3 mb-5'/>
          </label>
          <br />
          <label>
            Content:
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} color={20} className='w-[100%] border-2 p-3 mb-5'/>
          </label>
          <br />
          <button onClick={handleUpdateBlog} className='bg-[#395651] p-[8px] px-[10px]'>Update Blog</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditBlog;