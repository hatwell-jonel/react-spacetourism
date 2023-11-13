import { useState } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Header from './components/Header'


function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
          {/* Redirect from root path to the default path ("/home" in this case) */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path='/home' index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


// https://space-tourism-multi-page-website-one.vercel.app/index.html