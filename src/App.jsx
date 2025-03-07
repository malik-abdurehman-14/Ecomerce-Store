import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<LoginPage />} />
          <Route path="/my-cart" element={<CartPage />} />
          <Route path="/check-out" element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;