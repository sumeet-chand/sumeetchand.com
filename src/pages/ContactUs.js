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
              "To humanity I invite you to join me in a world with autonomy to augment our bodies to become
              better. To merge with the machine and become more than human. To join the next stage of human
              evolution."
            </i>
          </p>
          <p>
            NOTE: Sumeet has no social media accounts. Please report and ignore any malicious social
            media accounts claiming to be Sumeet.
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
