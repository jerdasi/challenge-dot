import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import LoginContext from '../Context/LoginContext';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(LoginContext);
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setAuth({ authenticated: true });
      localStorage.setItem('authenticated', JSON.stringify({ authenticated: true }));
      // alert('Berhasil Login');
      history('/');
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 text-white">
        <form className="login_form my-[20vh] text-center" onSubmit={handleSubmit}>
          <h1 className="text-2xl bg-black inline-block bg-black font-bold p-4">Login Here</h1>
          <div className="w-1/2 border border-black mx-auto h-[40vh] bg-white mt-8 p-4 relative">
            <input type="text" placeholder="Username" className="w-full h-12 p-4 my-2 rounded-md border text-black" value={username} onChange={(e) => setUserName(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full h-12 p-4 my-2 rounded-md border text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <button type="submit" className="h-12 bg-black w-full rounded-md">Log In</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
