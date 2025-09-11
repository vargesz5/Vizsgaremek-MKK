import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SuLi from '../Msrc/pages/SuLi.tsx'
import Home from '../Ksrc/Home.tsx'
import Webshop from '../Msrc/pages/Webshop.tsx';
import { UserProvider } from '../Msrc/context/UserContext.tsx';

function App() {
  const noop = () => { };
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="SuLi" element={<SuLi onSuccess={() => {}}/>} />
            <Route path="Webshop" element={<Webshop cart={{}} updateCart={noop} />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App