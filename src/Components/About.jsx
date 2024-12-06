import React from 'react'
import './About.css'
import myimg from './My-Photo.jpg'

const About = () => {
 return (
  <main className='main1'>
   <div className='div-img'>
    <img src={myimg} alt="" />
   </div>

   <div className='div-text'>
    <h1>About <span>Me</span></h1>
    <h5 className='text-warning'>Full-Stack Developer</h5>
    <p>A full stack developer is a software developer who has expertise in both front-end and back-end development. The term “full stack” refers to the entire stack of technologies and tools required to build a complete web application, including both the client-side (front end) and server-side (back end) components.  Full stack developers can introduce themselves by highlighting their skills, experience, and expertise in both front-end and back-end development. In this blog, we will share samples and explain some important points which a candidate can refer to while introducing themselves as a full stack developer.</p>
    <div className='more-button'>
     <button className='btn btn-outline-primary'><a href='#'>More About me</a></button>
    </div>
   </div>

  </main>
 )
}

export default About



