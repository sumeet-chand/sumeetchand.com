import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/graphics/logos/logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Sumeet Singh logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contactus">Contact us</Link></li>
      </ul>
    </div>
  );
}

export default Header;
