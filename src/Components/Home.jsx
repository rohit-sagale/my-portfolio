import './Home.css';

import myImage from './My-Photo.jpg';

export default function Home() {
 return (
  <>
   <main>
    <div className='text-div'>
     <h4>Hello,It's Me</h4>
     <h2>Rohit Sagale</h2>
     <h4>And I'm a Software Developer</h4>
     <p>I am a skilled Web and Software Developer with expertise in front-end and back-end technologies. I specialize in creating responsive, user-friendly websites and robust software solutions tailored to meet diverse business needs. My technical proficiency includes HTML, CSS, JavaScript, React.js, Python, Django, and Bootstrap. With experience in object-oriented programming and modern frameworks, I build innovative solutions that enhance user experience and optimize performance. I am also passionate about learning emerging technologies like AI to develop intelligent systems for future challenges. Currently, I am working on projects like an Online Car Rental platform, showcasing my ability to design and implement scalable applications effectively</p>
    </div>

    <div className='img-div'>
     <img src={myImage} alt="Description" className='my-img' />
    </div>
   </main>
  </>
 )
}