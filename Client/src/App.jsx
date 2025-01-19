import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Padding from "./components/Padding"
import LowerPadding from "./components/LowerPadding"
import Templates from "./pages/Templates"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./pages/About"
import Resume1 from "./Resume/Resume1"
import ResumeForm from "./Resume/AddTemplate"
import { useEffect, useState } from "react"

function App() {

  
     const [savedTemplates,setSavedTemplates]= useState([]);
     const [selectedTemplate,setSelectedTemplate]=useState({});
        useEffect(()=>{
            const templates = JSON.parse(localStorage.getItem('resumeTemplates')) || [];
            setSavedTemplates(templates);
        },[])
  

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/templates" element={<Templates savedTemplates={savedTemplates} setSelectedTemplate={setSelectedTemplate} selectedTemplate={selectedTemplate}/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/resume" element={<Resume1 selectedTemplate={selectedTemplate}/>}/>
      <Route path="/template/add" element={<ResumeForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
