import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in by checking localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-white text-xl">Job Portal</h1>
          <nav>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-white px-4 py-2 hover:underline">
                  Login
                </Link>
                <Link to="/register" className="text-white px-4 py-2 hover:underline">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
