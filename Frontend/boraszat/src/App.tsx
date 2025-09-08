import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SuLi from '../Msrc/SuLi'
import Home from '../Ksrc/Home'
import Webshop from '../Msrc/Webshop';

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="SuLi" element={<SuLi/>} />
          <Route path="Webshop" element={<Webshop/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App