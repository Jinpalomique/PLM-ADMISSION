import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Plmat from './pages/Plmat'
import PlmatInstructions from './pages/PlmatInstructions'

function App() {


  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/plmat' element={<Plmat />} />
            <Route path='/plmat_instructions' element={<PlmatInstructions />} />
          </Routes>
      </Router>

    </>
  )
}

export default App
