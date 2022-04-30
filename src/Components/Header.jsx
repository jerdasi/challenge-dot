import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LoginContext from '../Context/LoginContext';

export default function Header() {
  const [show, setShow] = useState(false);
  const { auth } = useContext(LoginContext);
  // console.log(auth);
  const gaskan = () => {
    setShow(!show);
  };

  return (
    <header className="h-16">
      <nav className="px-4 md:px-12 h-full md:flex md:justify-between items-center my-auto bg-black">
        <div className="flex justify-between items-center h-full">
          <div className="logo text-white">
            Logo
          </div>

          <span className="text-xl cursor-pointer block md:hidden">
            <FontAwesomeIcon icon={!show ? faBars : faClose} className="text-white text-xl" onClick={gaskan} />
          </span>
        </div>

        <ul
          className={['md:flex', 'md:items-center', 'md:static', 'absolute', 'w-full', 'left-0', 'md:w-auto', 'md:py-0', 'py-5', 'md:opacity-100', 'top-100', 'md:text-white', 'bg-white', 'md:bg-inherit', 'md:z-auto', show ? 'z-10 opacity-100' : '-z-10 opacity-0'].join(' ')}
        >
          <li className="mb-2 mx-6 md:mx-6 md:my-0 active-link"><Link to="/">Home</Link></li>
          <li className="mb-2 mx-6 md:mx-6 md:my-0"><Link to="/">Saved</Link></li>
          <li className="mb-2 mx-6 md:mx-6 md:my-0"><Link to={auth ? '/logout' : '/login'}>{auth ? 'Logout' : 'Login' }</Link></li>
        </ul>

      </nav>
    </header>
  );
}
