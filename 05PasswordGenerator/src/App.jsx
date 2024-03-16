import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef (null)

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+= "1234567890"
    if (charAllowed) str+= "!@#$%^&*()~`':><?/"

    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length))
      pass += char
      
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const clickClip =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect (()=>{
      passwordGenerator()
  } ,[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className='bg-slate-700'>
          <div>
              <h1 className='p-6 text-4xl text-orange-500'>Password Generator</h1>
              <input type="text" value={password} className='rounded-sm p-2' placeholder='password' ref={passwordRef} readOnly/>
              <button className='bg-blue-400 text-black p-2 rounded-sm' onClick={clickClip}>copy</button>
          </div>
      
      <div className='flex gap-x-2 p-5 justify-center'>
          <div className='flex gap-x-1 items-center'>
                <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
                <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex gap-x-1 items-center'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberinput' onChange={()=>{
              setNumberAllowed ((prev)=>!prev)
            }} />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex gap-x-1 items-center'>
            <input type="checkbox" defaultChecked={charAllowed} id='charinput' onChange={()=>{
              setCharAllowed ((prev)=>!prev)
            }} />
            <label htmlFor="number">Characters</label>
          </div>
      </div>
      </div>
    </>
  )

}
export default App
