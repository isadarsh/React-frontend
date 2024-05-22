import { useState } from 'react';
import ColorTab from './component/ColorTab';

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {/*onclick expects a function */}
          <button onClick={()=> setColor("black")}
            className='bg-black text-white rounded-3xl outline-none px-4 shadow-lg'>Black</button>
          <button onClick={() => setColor("red")}
            className='bg-red-500 text-white rounded-3xl outline-none px-4 shadow-lg'>Red</button>
          <button onClick={()=> setColor("green")}
            className='bg-green-500 text-white rounded-3xl outline-none px-4 shadow-lg'>Green</button>
          <button onClick={()=> setColor("yellow")}
            className='bg-yellow-400 text-white rounded-3xl outline-none px-4 shadow-lg'>Yellow</button>
          <button onClick={()=> setColor("blue")}
            className='bg-blue-500 text-white rounded-3xl outline-none px-4 shadow-lg'>Blue</button>
          <button onClick={()=> setColor("violet")}
            className='bg-violet-900 text-white rounded-3xl outline-none px-4 shadow-lg'>Violet</button>
          <button onClick={()=> setColor("purple")}
            className='bg-purple-500 text-white rounded-3xl outline-none px-4 shadow-lg'>Purple</button>

        </div>
      </div>

    </div>
  )
};

export default App;
