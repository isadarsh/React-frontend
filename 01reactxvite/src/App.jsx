import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  const increaser = () => {
    // console.log("plus", Math.random());
    setCount(count + 1)
  }
  const decreaser = () => {
    // console.log("minus", Math.random());
    if (count - 1 < 0) {
      alert("cannot be negative");
    } else {
      setCount(count - 1)
    }
    
  }
  return (
    <>
      <h1>aaj tera bhai Counter banayega</h1>
      <h2>counter value: {count}</h2>
      <button onClick={increaser}>Increment</button>
      <span>~  <b>O_o</b>  ~</span>
      <button onClick={decreaser}>Decrement</button>

    </>
  )
}

export default App
