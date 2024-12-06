import React from 'react'
import './Projects.css'

const Projects = () => {
 return (
  <div className='project-main'>
   <section id="projects" className="projects-section">
    <div className="container">
     <h2>My Projects</h2>
     <div className="projects-grid">

      <div className="project-card">
       <img src="https://media.istockphoto.com/id/467103541/photo/car-rental-sign.jpg?s=612x612&w=0&k=20&c=pjd-9j9Q2SttZHyARb7VEnWMRvA3XHgywGg7gwIq3vQ=" alt="Project 1"></img>
       <h3>Online Car rental</h3>
       <p>The Online Car Rental Project is a comprehensive web application designed to simplify and enhance the car rental experience for customers and businesses. This project allows users to browse, book, and manage car rentals seamlessly while providing an intuitive platform for administrators to oversee vehicle availability, bookings, and customer data.</p>
       <a href="#" target="_blank">View Project</a>
      </div>

      <div className="project-card">
       <img src="https://lh3.googleusercontent.com/pffTiT-Mo1ejkHTG7LQchx4W70aHecS-YHU4zESpQUhgaUCLAF-o4D1bKbPjrINxIN8xAKiUDTcO22zp8v2B9wHq9qZBLAoVpLHhsBo=rw-e365-w2880-v1" alt="Project 2"></img>
       <h3>google gemini</h3>
       <p>I Created google gemini project ,using html,css,bootstrap,javascript,react.js,api</p>
       <a href="#" target="_blank">View Project</a>
      </div>

      <div className="project-card">
       <img src="project3.jpg" alt="Project 3"></img>
       <h3>Project Title 3</h3>
       <p>Short description of the project goes here.</p>
       <a href="#" target="_blank">View Project</a>
      </div>
     </div>
    </div>
   </section>

  </div>
 )
}

export default Projects
