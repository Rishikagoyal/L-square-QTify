import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Home from '../src/components/Home';
import Header from '../src/components/Header/Header';
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (

    <> 
    <Navbar/>
    <Header/>
    <Routes>
   
   
    
    <Route exact path='/home' element={<Home/>} />
  
  
    </Routes></>
    
    
  );
    
  /*return(
   
  
   <div> <Navbar/>
   
   <Routes>
    
     <Route exact path='/home' component={Home}/>
   </Routes>
   </div>
  
  
 
  )*/

}

export default App;
