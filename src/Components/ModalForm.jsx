import React, { useState } from 'react'
import Modal from 'react-modal'
import CreateBlog from './CreateBlog';
const ModalForm = () => {
    const [open,setOpen]=useState(false);
    function openModal() {
        setOpen(true);
      }
    
    //   function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    //   }
    
      function closeModal() {
        setOpen(false);
      }
  return (
    <div>
        <button onClick={openModal} className='py-[8px]'>Add Blog</button>
        <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
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
                    // width: '400px',
                    width:'calc(70% - 10px)',
                    // height: '400px'
                    }
                    }}
                    >
                        <CreateBlog />
                    </Modal>
    </div>
  )
}

export default ModalForm
