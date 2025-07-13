import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='bg-violet-50 text-4xl'>
    HEllow from web x 
  </h1>
  <div className='animate-spin text-2xl'>⚽️</div>
  </>
  )
}

export default App
