import React from 'react'
import './Services.css';

const Services = () => {
 return (
  <section className='services'>
   <h2 className='text-center'>My <span>Services</span></h2>
   <div className='card-section'>

    <div className='card'>
     <div className='card-header'>
      <h5><span className='bi bi-code-slash fs-2'></span></h5>
     </div>
     <div className='card-body'>
      <h4 className='fw-bold'>Front-end Development</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquam quos eius amet repudiandae praesentium, accusamus obcaecati rem odit accusantium non aperiam?</p>
     </div>
     <div className='card-footer'>
      <button className='btn btn-primary'>More Info</button>
     </div>
    </div>


    <div className='card'>
     <div className='card-header'>
      <h5><span className='bi bi-code-slash fs-2'></span></h5>
     </div>
     <div className='card-body'>
      <h4 className='fw-bold'>Python Development</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquam quos eius amet repudiandae praesentium, accusamus obcaecati rem odit accusantium non aperiam?</p>
     </div>
     <div className='card-footer'>
      <button className='btn btn-primary'>More Info</button>
     </div>
    </div>


    <div className='card'>
     <div className='card-header'>
      <h5><span className='bi bi-code-slash fs-2'></span></h5>
     </div>
     <div className='card-body'>
      <h4 className='fw-bold'>AI expert</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, aliquam quos eius amet repudiandae praesentium, accusamus obcaecati rem odit accusantium non aperiam?</p>
     </div>
     <div className='card-footer'>
      <button className='btn btn-primary'>More Info</button>
     </div>
    </div>



   </div>
  </section>
 )
}



export default Services