import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Padding from "./components/Padding"
import LowerPadding from "./components/LowerPadding"
import Templates from "./pages/Templates"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Padding/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/templates" element={<Templates/>}/>
    </Routes>
    <LowerPadding/>
    </BrowserRouter>
    </>
  )
}

export default App
