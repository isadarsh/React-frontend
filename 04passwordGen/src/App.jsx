import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState('raaz-KI-baat-BATAYEIN');
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  //useRefhook
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])//why to add fun (setpassword?) - For sake of optimisation (memoized)

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
  }


  useEffect(() => { passwordGenerator() }, [passwordGenerator, length, numberAllowed, characterAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">

        <h1 className='text-center my-31 py-2'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type='text' value={password} className='outline-none w-full py-2 px-3 sm:w-3/4 md:w-full'
            placeholder='password' readOnly />
          <button onClick= {copyPasswordToClipboard}
            className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 active:scale-90'>
            Copy</button>
        </div>

        <div className="flex justify-center text-sm gap-x-2 py-2">

          <div className="flex items-center gap-x-1">
            <input type="range" name="length of password"
              min={8} max={20} value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input ref={passwordRef} type="checkbox" defaultChecked={numberAllowed} id="numberInput"
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
