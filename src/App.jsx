import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
