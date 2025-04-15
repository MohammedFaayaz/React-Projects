import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
     const username = 'fayaz'

  return (
    <>
      <p>
        Tailwindcss with react
      </p>
      <Cards/>
   </>
  )
}

export default App
