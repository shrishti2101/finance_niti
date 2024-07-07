import React from 'react';
import './App.css';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import EditBlog from './Components/EditBlog';
import CreateBlog from './Components/CreateBlog';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // const { data: blogs,postblog, updateBlog } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="App  h-[100vh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blogs />} />
          <Route path='/CreateBlog' element={<CreateBlog />} />
          <Route path="/EditBlog/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
