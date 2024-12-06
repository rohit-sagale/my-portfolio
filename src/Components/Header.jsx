import './Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Services'
import Skills from './Skills'
import Projects from './Projects'
import Contacts from './Contacts'

export default function Header() {
 return (
  <>

   <Router>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
     <div className="container-fluid">
      <a className="navbar-brand fs-3" href="#">ᴍʏ ᴘᴏʀᴛғᴏʟɪᴏ</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
       <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
       <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link" to={"/home"}>Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link" to={"/Service"}>Service</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to={"/Skills"}>Skills</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to={"/Projects"}>Projects</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to={"/Contacts"}>Contacts</Link>
        </li>
       </ul>
      </div>
     </div>
    </nav>
    <Routes>
     <Route path="/home" element={<Home></Home>}></Route>
     <Route path="/about" element={<About></About>}></Route>
     <Route path="/Service" element={<Service></Service>}></Route>
     <Route path="/Skills" element={<Skills></Skills>}></Route>
     <Route path="/Projects" element={<Projects></Projects>}></Route>
     <Route path="/Contacts" element={<Contacts></Contacts>}></Route>
    </Routes>
   </Router >
  </>
 )
}