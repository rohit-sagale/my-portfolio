import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Skills from './Components/Skills.jsx'

function App() {
  return (
    <>
      <Header></Header>
      {/* <Home></Home> */}
      {/* {<About></About>}
      {<Services></Services>}
      {<Skills></Skills>} */}
      <Footer></Footer>
    </>
  );
}

export default App;
