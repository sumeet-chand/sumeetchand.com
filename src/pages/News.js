import React from 'react';

const News = () => {
  return (
    <div>
      <div className="main">
        <div className="column1"></div>
        <div className="column2">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>News</h1>
          </div>
          <section style={{ margin: '2rem 0' }}>
            <h3>Cyborg Documentary - Filming Schedule</h3>
            <p>
              Hey everyone, I'm currently filming a documentary on the topic of Cybernetics, Cyberware, and Cyborgs.
              If you would like to volunteer for shooting, sound, media, editing, or any other role, please contact me via the <a href="/contactus">Contact Us</a> page.
              <br /><br />
              We're looking for volunteers to be filmed with their cyberware, or people who would like to be interviewed on the topic.
              If you would like to be involved, please contact me via our Contact Us page.
              <br /><br />
              The filming schedule is currently planned for a pilot in late 2026.
            </p>
          </section>
          <section style={{ margin: '2rem 0' }}>
            <h3>Delay with book "Cybernetics, Cyberware and Cyborgs"</h3>
            <p>
              Sorry everyone. I'm looking for a foreword (book introduction) from a person discussed
              within the book who lives overseas that I would like to personally visit first. I can't give an ETA as I'm busy with life.
            </p>
          </section>
          <section style={{ margin: '2rem 0' }}>
            <h3>Ongoing Biomedical Engineering Meetup</h3>
            <p>
              I host an ongoing Biomedical Engineering social group in Sydney, Australia. 
              You can attend physically or online here:&nbsp;
              <a href="https://www.meetup.com/biomedical-engineering-cyberware-and-cyborgs-group/" target="_blank" rel="noopener noreferrer">
                https://www.meetup.com/biomedical-engineering-cyberware-and-cyborgs-group/
              </a>
            </p>
          </section>
          <section style={{ margin: '2rem 0' }}>
            <h3>Ongoing Open Source Projects</h3>
            <p>
              My GitHub is below, feel free to contribute anytime.<br />
              <a href="https://github.com/sumeet-chand" target="_blank" rel="noopener noreferrer">
                https://github.com/sumeet-chand
              </a>
            </p>
          </section>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default News;
