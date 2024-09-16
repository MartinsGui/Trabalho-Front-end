// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/cars';

export const getCars = () => axios.get(API_URL);

export const getCar = (id) => axios.get(`${API_URL}/${id}`);

export const postCar = (car) => axios.post(API_URL, car);

export const updateCar = (id, car) => axios.put(`${API_URL}/${id}`, car);

export const deleteCar = (id) => axios.delete(`${API_URL}/${id}`);
