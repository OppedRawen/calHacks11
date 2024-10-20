import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import VoiceAgent from './components/VoiceAgent';
import StartVoiceButton from './components/StartVoiceButton';
import { VoiceProvider } from '@humeai/voice-react';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import DataExtraction from './components/DataExtraction';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;
  const configId = import.meta.env.VITE_CONFIG_ID;
  
console.log(apiKey);
console.log(configId);
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
    
    <VoiceProvider  auth={{ type: 'apiKey', value: apiKey }}

    configId={configId}>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-800 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className=" text-white text-xl">Job Portal</h1>
         
          
          <nav>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white bg-red-300 px-4 py-2 rounded hover:bg-red-600"
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
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                <StartVoiceButton />
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => navigate('/data-extraction')}
                    className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                  >
                    Go to Data Extraction Page
                  </button>
                </div>
                </>
              ) : (
                <p>Please log in to access the voice agent.</p>
              )
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/data-extraction" element={<DataExtraction />} />
        </Routes>
      </main>
    </div>
    </VoiceProvider>
  );
}

export default App;
