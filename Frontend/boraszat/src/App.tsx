import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SuLi from '../Msrc/SuLi'
import Home from '../Ksrc/Home'

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
             <Route path="auth" element={<SuLi/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App