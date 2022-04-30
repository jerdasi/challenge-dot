import '../assets/styles/index.css';
import React from 'react';
// import {
//   Routes,
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import Movies50 from '../Components/Movies50';
import Header from '../Components/Header';
// import Login from './Components/Login';
import Footer from '../Components/Footer';
// import { LoginProvider } from '../Context/LoginContext';

export default function Home() {
  return (
    <>
      <Header />
      <Movies50 />
      <Footer />
    </>
  );
}
