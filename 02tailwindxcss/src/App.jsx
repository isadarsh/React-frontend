import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black rounded-full p-4 mb-2'>@Tailwind CSS voila@</h1>
      <Card about="tera pura ghar isme chale jayenga, assi hazar ka hai"/>
      <Card deviceName="HP" about="tera ghar isme chal jayenga, sath hazar ka hai "/>
    </>
  )
}

export default App
