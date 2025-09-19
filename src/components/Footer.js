import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercolumn">
        <h3>Quick links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/biographys">Biography</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contactus">Contact us</Link></li>
        </ul>
      </div>
      <div className="footercolumn">
        <h3>Mission</h3>
        <p><i>
          "Join me in a world where we have the freedom to augment ourselves, become better, and join the next stage of human evolution."
        </i>
        </p>
      </div>
      <div className="footercolumn">
        {/* Third column content goes here */}
        <p>Copyright © Sumeet Chand</p>
      </div>
    </div>
  );
}

export default Footer;
