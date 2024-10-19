import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProfileQuestionnaire from './components/ProfileQuestionare';  // Import the ProfileQuestionnaire
import { useEffect, useState } from 'react';
import Header from './components/Header'; // Create a new Header component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by checking localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1>Welcome to CalHacks 11!</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile-questionnaire" element={<ProfileQuestionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;
