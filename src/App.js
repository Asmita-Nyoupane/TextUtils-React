
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';


import Textform from './Components/Textform';
import { useState } from 'react';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert(
  {
    msg:message,
    type:type
  }
  )
  setTimeout(() => {
    setAlert(null);
  }, 1500);

}
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background='#381b81';
      document.body.style.color='white';
      showAlert("Dark mode enable","success");
    
      

    }
    else{
      setMode('light');
       document.body.style.background='white';
       document.body.style.color='black';
       showAlert("Light mode enable","success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
        <div className="container" my-3>
        <Routes>
          <Route path="/about" element={<About mode={mode} />}>
          </Route>
          <Route path="/" element={<Textform heading="Enter Your Text to Analyze" showAlert ={showAlert}mode={mode}/>}>
          </Route>
        </Routes>
        </div>
    </BrowserRouter>
    

    
</>

  );
}

export default App;
