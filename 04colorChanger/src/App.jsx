import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap fixed bottom-12 justify-center'>
          <div className='bg-white rounded-xl px-12 py-5 gap-3 '>
            <button className='text-black rounded-full items-center bg-red-600 px-4 py-2 mx-3' onClick={() => setColor("red")}>red</button>
            <button className='text-black rounded-full items-center bg-blue-600 px-4 py-2 mx-3' onClick={() => setColor("blue")}>blue</button>
            <button className='text-white rounded-full items-center bg-black px-4 py-2 mx-3' onClick={() => setColor("black")}>black</button>
            <button className='text-black rounded-full items-center bg-green-600 px-4 py-2 mx-3' onClick={() => setColor("green")}>green</button>
            <button className='text-black rounded-full items-center border-black border-solid bg-white px-4 py-2 mx-3' onClick={() => setColor("white")}>white</button>
          </div>
        </div>  
      </div>
    </>
  );
}

export default App;
