import React from 'react'
import './Contacts.css'

const Contacts = () => {
 return (
  <div className='contactc'>
   <section className="contact-section">
    <div className="container">
     <h2>Contact Us</h2>
     <form action="#" method="post" className="contact-form">
      <div className="form-group">
       <label for="name">Name</label>
       <input type="text" id="name" name="name" placeholder="Enter your name" required></input>
      </div>
      <div className="form-group">
       <label for="address">Address</label>
       <input type="text" id="address" name="address" placeholder="Enter your address" required></input>
      </div>
      <div className="form-group">
       <label for="mobile">Mobile Number</label>
       <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required></input>
      </div>
      <div className="form-group">
       <label for="email">Email</label>
       <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
      </div>
      <button type="submit">Submit</button>
     </form>
    </div>
   </section>
  </div>
 )
}

export default Contacts
