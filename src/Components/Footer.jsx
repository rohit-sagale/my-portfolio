import './Footer.css'

export default function Footer() {
 return (
  <>
   <footer>
    <div className='box'>
     <span className='brand-title'>About</span>
     <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. tae quisquam reiciendis perspiciatis, adipisci cupiditate error inventore repellat tempora of</p>
    </div>

    <div className='box link'>
     <span className='brand-title'>Links</span>
     <span className='bi bi-arrow-right mt-2'><a href='#'>Home</a></span>
     <span className='bi bi-arrow-right mt-2'><a href='#'>About</a></span>
     <span className='bi bi-arrow-right mt-2'><a href='#'>Services</a></span>
     <span className='bi bi-arrow-right mt-2'><a href='#'>Projects</a></span>
    </div>

    <div className='box contact'>
     <span className='brand-title'>Contact</span>
     <span className='mt-2'><i class="bi bi-geo-alt me-2"></i>shevgaon,ahmednagar</span>
     <span className='mt-2'><i class="bi bi-telephone-fill me-2 text-primary"></i>(+91) 9359378281</span>
     <span className='mt-2'><i class="bi bi-envelope-arrow-up-fill me-2"></i>rohitsagale2@gmail.com</span>
    </div>

    <div className='box'>
     <span className='brand-title'>Follow Us</span>
     <div className="social-icon mt-2">
      <span className='bi bi-facebook text-primary'></span>
      <span className='bi bi-twitter-x'></span>
      <span className='bi bi-whatsapp text-success'></span>
     </div>
    </div>
   </footer>
  </>
 )
}