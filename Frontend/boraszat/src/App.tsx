import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SuLi from '../Msrc/pages/SuLi.tsx'
import Home from '../Ksrc/Home.tsx'
import Webshop from '../Msrc/pages/Webshop.tsx';
import { UserProvider } from '../Msrc/context/UserContext.tsx';
import { CartProvider } from '../Msrc/context/CartContext.tsx';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="SuLi" element={<SuLi onSuccess={() => { }} />} />
              <Route path="Webshop" element={<Webshop />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
  )
}

export default App