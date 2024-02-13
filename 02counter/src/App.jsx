import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;

  let [counter,setCounter] = useState(15)
 const addValue = ()=>{
  //counter += 1;


  if(counter < 20){
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter)=>{
      return prevCounter +1
    }) //Call Back functions

    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
  }
 
  console.log("Counter",counter);
 }

 const removeValue= () =>{

  if(counter > 0){
    setCounter(counter - 1)
  }
 }
  return (
    <>
      <h1>Chai aur React {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
    
      <br/>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
