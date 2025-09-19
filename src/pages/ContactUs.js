import React from 'react';
import ContactUsForm from '../components/backend/ContactUsForm';

const ContactUs = () => {
  return (
    <div>
      <div className="main">
        <div className="column1"></div>
        <div className="column2">
          <div style={{ textAlign: 'center' }}>
            <h1>Contact Us</h1>
          </div>
          <br />
          <p>
            <i>
              "Join me in a world where we have the freedom to augment ourselves, become better, and join the next stage of human evolution."
            </i>
          </p>
          <h3>Contact Us Form</h3>
          <ContactUsForm />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default ContactUs;
