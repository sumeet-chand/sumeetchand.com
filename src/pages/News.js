import React from 'react';

const News = () => {
  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
          <h1>News</h1>
          </div>
          <br />
          <h3>Delay with book "Cybernetics, Cyberware and Cyborgs"</h3>
          <p>
            Sorry everyone. I'm looking for a forward (book introduction) from a person discussed
            within the book who lives overseas that I would like to personally visit first. I can't give an ETA as I'm busy with life
          </p>
          <br />
          <h3>Ongoing Biomedical Engineering Meetup</h3>
          <p>
            I host a ongoing Biomedical Engineering social group in Sydney, Australia. 
            You can attend physically or online here: <a href="https://www.meetup.com/biomedical-engineering-cyberware-and-cyborgs-group/">https://www.meetup.com/biomedical-engineering-cyberware-and-cyborgs-group/</a>
          </p>
          <br />
          <h3>Ongoing Open Source projects</h3>
          <p>
            My Github is below, feel free to contribute anytime.
          </p>
          <p>
            <a href="https://github.com/sumeet-chand">https://github.com/sumeet-chand</a>
          </p>
          <br />
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default News;
