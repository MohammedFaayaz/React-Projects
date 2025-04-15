import { useState } from 'react'

import './App.css'

function App() {


  const [counter,setcounter] = useState(0)
  //let counter = 0
   
  const addvalue = () =>{
    setcounter(counter + 1)
    
  }
  const removevalue = () =>{
     setcounter(counter-1)
 }
  
  return (
    <>
      <h1>React with fayaz {counter} </h1>
      <h2>Counter:{counter} </h2>
      <button
      onClick= {addvalue} >ADD value</button>
      <button
      onClick= {removevalue}>REMOVE value</button>
      <p>Footer:{counter} </p>
    </>
  )
}

export default App
