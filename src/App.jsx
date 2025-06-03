import { useState } from 'react'
import './App.css'
import Calculator from '../components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-100 min-h-screen'>
      <Calculator />
    </div>
  )
}

export default App
