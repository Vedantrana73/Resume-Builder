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

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Padding/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/templates" element={<Templates/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about-us" element={<About/>}/>
    </Routes>
    <LowerPadding/>
    </BrowserRouter>
    </>
  )
}

export default App
