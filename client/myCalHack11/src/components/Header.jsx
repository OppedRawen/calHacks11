import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authServices';  // Adjust the import path as necessary

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  // Handle the logout action
  const handleLogout = () => {
    logout();  // Call the logout service
    setIsLoggedIn(false);  // Update state
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <header>
      {isLoggedIn && (
        <button onClick={handleLogout} style={{ float: 'right' }}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Header;
