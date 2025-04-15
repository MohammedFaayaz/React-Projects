import React from 'react'; 
import './App.css';
import { useState } from 'react';

function App() {

  const [color , setcolor] = useState('blue')

 // function changecolor() {
   // setcolor(color)
  //}
  return (
    

    <div className='w-full h-screen duration-200 ' style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={ () => setcolor('red')}
           className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background:'red'}}>
            RED
          </button>
          <button onClick={ () => setcolor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background:'orange'}}>
            ORANGE
          </button>
          <button onClick={ () => setcolor('yellow') }className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background:'yellow'}}>
            YELLOW
          </button>
          <button onClick={ () => setcolor('purple')}className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background:'purple'}}>
            PURPLE
          </button>
          <button onClick={ () => setcolor('grey')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background:'grey'}}>
            GREY
          </button>
          





        </div>

      </div>
    </div>
    
  );
}

export default App;
