import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from  '../finance_niti_logo.png'
// import CreateBlog from './CreateBlog'
import ModalForm from './ModalForm'

const Navbar = () => {
  return (
<header className='container mx-auto  p-1 flex justify-center items-center'>
    <nav className='flex justify-between mx-auto items-center w-[100%]'>
        <div className='nav-brand'>
            <NavLink to="/"><img src={logo} alt="logo"className="drop-shadow-2xl h-[120px] w-[150px]"/></NavLink>
        </div>
        
            <ModalForm/>
       
    </nav>
</header>
  )
}

export default Navbar