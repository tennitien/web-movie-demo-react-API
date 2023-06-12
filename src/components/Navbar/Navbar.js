import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import './Navbar.scss';

export default function NavBar() {
  // change background Navbar when scroll
  useEffect(() => {
    const changeBackgroundNavbar = () => {
      if (window.scrollY >= 100) {
        document.querySelector('.navbar').classList.add('active');
        document.querySelector('.icon').classList.add('active');
      } else {
        document.querySelector('.navbar').classList.remove('active');
        document.querySelector('.icon').classList.remove('active');
      }
    };

    window.addEventListener('scroll', changeBackgroundNavbar);

    // clean up
    return () => window.removeEventListener('scroll', changeBackgroundNavbar);
  }, []);

  return (
    <header>
      <nav id='navbar' className='navbar'>
        <div className='nav-link container flex-center'>
          <Link to='/' className='header-navbar'>
            Movie App
          </Link>

          <Link to='/search'>
            <FaSearch className='icon' />
          </Link>
        </div>
      </nav>
    </header>
  );
}
