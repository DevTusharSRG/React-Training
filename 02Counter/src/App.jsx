import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)

  const addValue =()=>{
    if (counter<20) {
      setCounter(counter+1)
    }
    
  }

  const removeValue=()=>{
    if (counter>0) {
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Welcome to React counter</h1>
      <h3>Code With SRG</h3>
      <h2>Counter {counter}</h2>
      <button onClick={addValue}>Add :{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove:{counter}</button>
    </>
  )
}

export default App
