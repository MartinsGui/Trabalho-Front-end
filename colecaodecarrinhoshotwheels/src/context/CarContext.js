import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars((prevCars) => [...prevCars, { ...car, id: Date.now().toString() }]);
  };

  const removeCar = (id) => {
    setCars((prevCars) => prevCars.filter(car => car.id !== id));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {children}
    </CarContext.Provider>
  );
};

CarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
