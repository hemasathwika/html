//  import logo from './logo.svg';
import './App.css';
//  import Greeting from './components/Greeting';
// import Calculator  from './components/Calculator';
// import Add from './components/Add';
// import Sub from './components/Sub';
// import Keypad from './components/Keypad';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Goals from './components/Goals';
import EmployeeList  from './components/Employees/EmployeeList';
import {   Route, Routes } from 'react-router-dom';
import Emailinput from './components/Emailinput';
function App() {


  return (
    
    <>
  {/* <Greeting/> 
 <Calculator/>
 <Keypad/>  
  <Add/>
 <Sub/>   */}
 {/* <About/> */}
 {/* <Goals/> */}
 {/* <EmployeeList/> */}
 <Header/>
 <Navbar/>
 
 <Routes>
 
  
 {/* <Route exact path="/" element={<Greeting/>} /> */}
 <Route exact path="/" element={<Home/>} />
 <Route exact path="/about" element={<About/>} />
 <Route exact path="/contact" element={<Contact/>} />
 {/* <Route exact path="/emailinput" element={<Emailinput/>}/> */}
 {/* <Route exact path="/login" element={<Login/>} />  */}
  {/* <Route exact path="/calculator"  element={<Calculator/>} />  */}
 
 </Routes>
 
 
 <div className="App"></div>
    


    </>
    
    
    
  );
}

export default App;
