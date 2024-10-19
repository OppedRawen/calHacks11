import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/'; // Adjust according to your backend URL

// Register a new user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem('isLoggedIn', true);  // Set login state in localStorage
  }
  return response.data;
};

// Login a user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem('isLoggedIn', true);  // Set login state in localStorage
  }
  return response.data;
};

// Logout a user
export const logout = () => {
  localStorage.removeItem('isLoggedIn');  // Remove login state from localStorage
};
