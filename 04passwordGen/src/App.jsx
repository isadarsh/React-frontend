import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('raaz-KI-baat-BATAYEIN');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(0);
  const [characterAllowed, setCharacterAllowed] = useState(0);

  return (
    <>//a input box of 75percent length of div followed by a 25percent (copy) button
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-center my-31 py-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' value={password} className='outline-none w-full py-2 px-3 sm:w-3/4 md:w-full'
            placeholder='password' readOnly />
          <button className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0'>
            Copy</button>
        </div>
        <div className="flex justify-center text-sm gap-x-2 py-2">
          <div className="flex items-center gap-x-1">
            <input type="range" name="length of password"
              min={8} max={20} value={length}
              className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput"
              onChange={() => { setCharacterAllowed((prev) => !prev) }} />
            <label htmlFor="characterAllowed">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
