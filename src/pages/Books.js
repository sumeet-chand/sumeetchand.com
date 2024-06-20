import React from 'react';
import image1 from '../assets/graphics/book-1.png';
import image2 from '../assets/graphics/book-2.png';

const Books = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Books</h1>
          </div>
          <br />
          <h3>Cyborg Alphabet</h3>
          <div style={{ textAlign: 'center' }}>
            <img src={image1} alt="Cyborg Alphabet" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <p>
            A children's book on science, technology, engineering, medicine and philosophy, recommended for ages 6+. A book designed for children in developing areas to supplement life skills in a fun and educational format. Watch as your child's struggles to overcome complex concepts such as anatomy, cyborgs, electricity and organisms.
          </p>
          <br />
          <h4>Purchase Links</h4>
          <p>Sabrenetics has a "pay what you can afford" approach to education.</p>
          <p>
            Free version available <a href="https://drive.google.com/file/d/1gNtkhOXLGVpJmKPTf4WRqMws0BfdSKPi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <p>
            Free lossless (High quality) version available <a href="https://drive.google.com/file/d/1EakO4zW-n2-LFHAhv95pD4LpcFDCqyGG/view?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <p>
            Paid version available <a href="https://sabrenetics.com/products/cyborg-alphabet" target="_blank" rel="noopener noreferrer">here</a>
          </p>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '33%' }}>
                  <strong>Hardback</strong>
                  <ul>
                    <li>ISBN: 978-0-6456579-0-6</li>
                    <li>Publisher: Sabrenetics</li>
                    <li>Language: English</li>
                    <li>Format: Hardback</li>
                    <li>Retail price: $32.99 AUD</li>
                    <li>Trim: 8.5 x 8.5 inch edition</li>
                    <li>Page count: 36</li>
                    <li>Publication date: January 1st, 2023</li>
                    <li>Audience: Children</li>
                    <li>Genre: Non Fiction</li>
                  </ul>
                </td>
                <td style={{ width: '33%' }}>
                  <strong>eBook</strong>
                  <ul>
                    <li>ISBN: 978-0-6456579-1-3</li>
                    <li>Publisher: Sabrenetics</li>
                    <li>Language: English</li>
                    <li>Format: EPUB</li>
                    <li>Retail price: $2.99 AUD</li>
                    <li>Page count: 36</li>
                    <li>Publication date: January 1st, 2023</li>
                    <li>Audience: Children</li>
                    <li>Genre: Non Fiction</li>
                  </ul>
                </td>
                <td style={{ width: '34%' }}>
                  <strong>Paperback (TBA)</strong>
                  <ul>
                    <li>ISBN: 978-0-6456579-2-0</li>
                    <li>Publisher: Sabrenetics</li>
                    <li>Language: English</li>
                    <li>Format: Paperback</li>
                    <li>Retail price: TBD</li>
                    <li>Trim: 8.5 x 8.5 inch edition</li>
                    <li>Page count: TBD</li>
                    <li>Publication date: TBD</li>
                    <li>Audience: Children</li>
                    <li>Genre: Non Fiction</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <hr />
          <br />
          <h3>Cybernetics, Cyberware and Cyborgs</h3>
          <div style={{ textAlign: 'center' }}>
            <img src={image2} alt="Cybernetics, Cyberware and Cyborgs" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <p>
            FREE for those neurodivergent, handicapped, schools, libraries and educational institutes, teachers, researchers, bookstores and more for samples.
          </p>
          <br />
          <h4>Purchase Links</h4>
          <p>Sabrenetics has a "pay what you can afford" approach to education.</p>
          <p>
            Free version available: TBA
          </p>
          <p>
            Free lossless (High quality) version available: TBA
          </p>
          <p>
            Paid version available: TBA
          </p>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '50%' }}>
                  <strong>Paperback</strong>
                  <ul>
                    <li>ISBN: 978-0-6456579-3-7</li>
                    <li>Publisher: Sabrenetics</li>
                    <li>Language: English</li>
                    <li>Format: Paperback</li>
                    <li>Retail price: TBD</li>
                    <li>Trim: 5.5 x 8.5 inch edition</li>
                    <li>Page count: TBD</li>
                    <li>Publication date: TBD</li>
                    <li>Audience: TBD</li>
                    <li>Genre: Non Fiction</li>
                  </ul>
                </td>
                <td style={{ width: '50%' }}>
                  <strong>eBook</strong>
                  <ul>
                    <li>ISBN: 978-0-6456579-4-4</li>
                    <li>Publisher: Sabrenetics</li>
                    <li>Language: English</li>
                    <li>Format: EPUB</li>
                    <li>Retail price: $2.99 AUD</li>
                    <li>Page count: TBD</li>
                    <li>Publication date: TBD</li>
                    <li>Audience: TBD</li>
                    <li>Genre: Non Fiction</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <hr />
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Books;
