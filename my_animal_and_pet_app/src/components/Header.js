// Header.js
import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="https://tinyurl.com/48zbpxww" className="logo">Pets</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
