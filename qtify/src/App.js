import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Home from '../src/components/Home';
import Header from '../src/components/Header/Header';
import {Route, Routes,BrowserRouter as Router,Outlet} from 'react-router-dom';
import {StyledEngineProvider} from '@mui/material/styles';

function App() {
  return (

    <>
    <StyledEngineProvider injectFirst>
      <Navbar/>
    
    </StyledEngineProvider> 
    
    </>
    
    
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
