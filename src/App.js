import React,{useState,useEffect} from 'react';
import {traerimagenes} from './helpers'
import './App.css';

function App() {
  
  let [imagenes,setImagenes]=useState({})
  
  
  
  useEffect( async() => {
    setImagenes(await traerimagenes())
  }, [])


  return (
    <div className="App">
      <img src={imagenes}/>
    </div>
  );
}

export default App;
