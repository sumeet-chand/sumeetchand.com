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
          "To humanity I invite you to join me in a world with autonomy to augment our bodies to become better. To merge with the machine and become more than human. To join the next stage of human evolution."
        </i>
        </p>
      </div>
      <div className="footercolumn">
        {/* Third column content goes here */}
      </div>
    </div>
  );
}

export default Footer;
