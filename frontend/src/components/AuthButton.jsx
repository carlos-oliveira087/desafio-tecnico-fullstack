import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthButton() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) setUsuario(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
    navigate('/auth');
  };

  return (
    <div>
      {!usuario ? (
        <button
          className='flex items-center text-md font-semibold justify-center bg-auth rounded-3xl h-10 w-24 hover:bg-quinternary hover:text-input'
          onClick={() => navigate('/auth')}
        >
          Login
        </button>
      ) : (
        <button
          className='flex items-center text-md font-semibold justify-center bg-auth rounded-3xl h-10 w-24 hover:bg-quinternary hover:text-input'
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </div>
  );
}
