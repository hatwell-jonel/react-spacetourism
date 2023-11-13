import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// https://space-tourism-multi-page-website-one.vercel.app/index.html