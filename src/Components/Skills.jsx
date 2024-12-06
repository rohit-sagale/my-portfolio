import React from 'react'
import './Skills.css'

const Skills = () => {
 return (
  <div className='main'>

   <div className='domains'>
    <div className='cat'>
     <h5>Web Developer</h5>
     <h5>Software Developer</h5>
    </div>
   </div>


   <div className='skill-progess-bar'>
    <h1>My Skills</h1>
    <div className="skill">
     <div className="label">HTML (85%)</div>
     <div className="progress">
      <div className="progress-bar html">85%</div>
     </div>
    </div>
    <div className="skill">
     <div className="label">CSS (80%)</div>
     <div className="progress">
      <div className="progress-bar css">80%</div>
     </div>
    </div>
    <div className="skill">
     <div className="label">Bootstrap (75%)</div>
     <div className="progress">
      <div className="progress-bar bootstrap">75%</div>
     </div>
    </div>
    <div className="skill">
     <div className="label">JavaScript (70%)</div>
     <div className="progress">
      <div className="progress-bar javascript">70%</div>
     </div>
    </div>

    <div className='skill'>
     <div className='label'>React.js(70%)</div>
     <div className='progress'>
      <div className='progress-bar react'>70%</div>
     </div>
    </div>

    <div className="skill">
     <div className="label">Python (90%)</div>
     <div className="progress">
      <div className="progress-bar python">65%</div>
     </div>
    </div>
    <div className="skill">
     <div className="label">Django (75%)</div>
     <div className="progress">
      <div className="progress-bar Django">75%</div>
     </div>
    </div>


    <div className="skill">
     <div className="label">Mysql (80%)</div>
     <div className="progress">
      <div className="progress-bar Mysql">80%</div>
     </div>
    </div>

   </div>
  </div>
 )
}

export default Skills
