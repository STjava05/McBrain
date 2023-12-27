
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Form from './components/form';
import Contact from './pages/Contact';
import Blog from './components/Blog';
import Single from './components/single/Single';
import SingleProduct from './pages/singleProduct';


function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:postId' element={<Single />} />
         
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:productId' element={<SingleProduct />} />

          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Container>
    </Router>

  );
}

export default App;
