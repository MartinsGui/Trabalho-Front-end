import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import AddCar from './pages/AddCar';
import { CarProvider } from './context/CarContext';

function App() {
  return (
    <Router>
      <CarProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </CarProvider>
    </Router>
  );
}

export default App;
