
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          
        </Routes>
        
        <Footer />
     
      </BrowserRouter>
      


    </div>
  );
}

export default App;
