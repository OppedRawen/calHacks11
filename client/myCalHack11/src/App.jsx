import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (<>
  
    <h1>
      Welcome to CalHacks 11!
    </h1>
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}
        
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
