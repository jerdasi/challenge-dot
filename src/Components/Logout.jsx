import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../Context/LoginContext';

export default function Logout() {
  const { setAuth } = useContext(LoginContext);
  const history = useNavigate();
  const handleLogOut = () => {
    setAuth(null);
    localStorage.removeItem('authenticated');
    alert('Berhasil Logout');
    history('/login');
  };

  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
      <button type="button" className="bg-white w-1/2 p-4 rounded-md" onClick={handleLogOut}>Logout</button>
    </div>
  );
}
