import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/'; // Adjust according to your backend URL

// Register a new user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
   
  }
  return response.data;
};

// Login a user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
 
  }
  return response.data;
};

// Logout user
export const logout = () => {
  
};
