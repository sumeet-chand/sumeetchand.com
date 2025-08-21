import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/graphics/logos/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Sumeet Singh logo" className="logo" />
      </Link>
      <nav>
        <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/biography">Biography</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;