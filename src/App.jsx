// import { useState } from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
 import Sidenav from './components/sidenav'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/ABout'
import Contact from './pages/Contact'
import  './index.css'



function App() {
  

  return (
  <>
  <BrowserRouter>
 <Routes>
    <Route path="/" element={<Layout />} />
      <Route  index element={<Home/>}/>
      <Route  path="about" element={<About/>}/>
      <Route  path="contact" element={<Contact/>}/>
      </Routes>
   
  
  </BrowserRouter>
   <div>
    <Sidenav />
  </div>
  
 
  </>
   
  )
}

export default App
