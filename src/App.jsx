import './assets/styles/index.css';
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// import Movies50 from './Components/Movies50';
// import Header from './Components/Header';
import Login from './Components/Login';
// import Footer from './Components/Footer';
import LoginContext, { LoginProvider } from './Context/LoginContext';
import Home from './Pages/Home';
import Logout from './Components/Logout';

// const LoginRoute = ({ children }) => {
//   const { auth } = useContext(LoginContext);
//   if (auth === null){
//     return children;
//   };
//   return <Navigate to = "/"/>;
// }

const LoginRoute = ({ children }) => {
  const { auth } = useContext(LoginContext);
  return auth ? children : <Navigate to="/login" />;
};

export default function Recipe() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginRoute><Home /></LoginRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </Router>
    </LoginProvider>
  );
}
