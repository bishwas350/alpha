import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './component/Product'
import Cart from './component/Cart'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
     </Router>
    </>
  )
}

export default App
