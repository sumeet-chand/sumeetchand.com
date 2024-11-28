import React from 'react';
import image1 from '../assets/graphics/biography-1.png';
import image2 from '../assets/graphics/biography-2.png';
import YouTubeEmbed from '../components/YouTubeEmbed';

const Biography = () => {
  return (
    <div>
      <div className="main">
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
          <h1>Biography</h1>
          </div>
          <br />
          <p>
            Sumeet Chand (Uses penpal nicknames; Sumeet Singh, or Summer Chand) of B- blood type
            was born on September 18, 1991, in Sydney, Australia, is the younger of two sons born to Anilta and 
            Dalip Chand.
          </p>
          <p>
            Anilta Chand of AB+ blood type, born on January 2, 1956, in Suva, Fiji, began her professional 
            journey after completing high school, initially working in the Housing Authority in Fiji. She 
            showcased her diverse skill set as a legal typist, bookkeeper, and accountant. Anilta migrated to 
            Sydney, Australia, on October 22, 1988, where she found employment with TUTA before Sumeet's birth.
            Throughout her life, she worked at various medical institutes, including Royal Prince Alfred
            Hospital (RPA).
          </p>
          <p>
          <div style={{ textAlign: 'center' }}>
          <img src={image1} alt="Fiji Islands" style={{ maxWidth: '100%', height: 'auto' }} />
            The Fiji islands, consisting of two major islands Vanua Levu (South) and Viti Levu (North).
            </div>
          </p>
          <p>
            Dalip Chand of B- blood type, born on April 18, 1953, in Labasa, Fiji, is a Pundit, polymath, 
            and polyglot proficient in fields such as medical sciences, linguistics, and music. His academic journey
            took him to universities across the globe, from the University of South Pacific (USP),
            University of the Philippines Los Baños (UPLB) to the University of Sydney (USYD).
          </p>
          <p>
            His professional expertise ranged from general pathology to veterinary science, haematology,
            microbiology, and epidemiology, eventually founding work as a handyman franchisee owner due
            to his senile genetic diabetic-related illness requiring constant physical exercise to survive.
          </p>
          
          <div style={{ textAlign: 'center' }}>
          <img src={image2} alt="Vanua Levu island, Fiji" style={{ maxWidth: '100%', height: 'auto' }} />
          <p>
            Vanua Levu is the second largest island of Fiji.
          </p>
          </div>
          
          <p>
            Sumeet spent his childhood in Tempe, NSW, Australia, attending Tempe Public School before
            his family relocated to Marrickville, where he completed his primary education at Marrickville
            West Public School. His earliest introduction to commercial science stemmed from accompanying
            his father to his laboratory worksite.
          </p>
          <div style={{ textAlign: 'center' }}>
          <YouTubeEmbed embedId="sUsvlCWvQrQ"/>
          </div>
          <p>
            Sumeet's first drama at Marrickville West Public School.
          </p>
          <p>
            After graduating from Casimir Catholic College in Marrickville, Sumeet pursued a Bachelor of
            Information and Communication Technology degree at the University of Western Sydney. His
            professional journey commenced with an IT support role, gradually expanding his expertise
            in technology, business, and life. To this day, Sumeet remains committed to exploring the
            interface between humanity and technology through research and discovery.
          </p>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Biography;
