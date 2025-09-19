import React from 'react';

const Gallery = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <div style={{ textAlign: 'center' }}>
          <h1>Gallery</h1>
          </div>
          <p>
            This world is filled with chaos, but in the midst of chaos, there is beauty.
            Here is a collection of images that you have shared that capture the essence of this beauty.
            I encourage you to share emails of your own images that you find beautiful.
            Together we can starve chaos of its power by focusing on the beauty that surrounds us.

            Send your images to: sumeet.singhji@outlook.com and I will add them to this gallery.
          </p>
          <img src="path/to/your/image.jpg" alt="Gallery Image" />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Gallery;
