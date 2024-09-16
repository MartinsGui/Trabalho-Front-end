import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CarProvider } from './context/CarContext'; // Adicione a importação do CarProvider
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import AddCar from './pages/AddCar';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <CarProvider> {/* Envolva o Router com o CarProvider */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </Router>
    </CarProvider>
  );
};

export default App;
