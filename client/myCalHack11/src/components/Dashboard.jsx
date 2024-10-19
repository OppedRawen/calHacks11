import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      axios.get('/api/protected-route', {
        headers: { 'x-auth-token': token },
      })
      .then((response) => setData(response.data))
      .catch((error) => {
        console.error('Error fetching protected data:', error.response?.data || error.message);
        localStorage.removeItem('token');
        navigate('/login');
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <p>Protected Data: {data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Dashboard;
