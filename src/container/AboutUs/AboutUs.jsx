
import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">A fun place to be! A trendy, yet classy restaurant, serving the most delectable and innovative dishes and drinks. Inside the historical Chimney room and outside, a relaxed terrace lounge. Serves a fusion cuisine with Asian and Western influences.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The Chimney Restaurant is a heritage Restaurant located in Durbar Marg, the thriving city center of Kathmandu Valley, in a prime location that is minutes walking distance from the former Royal Palace. Durbar marg is a commercial area with high-end shops and a variety of food options. Our 5 star deluxe luxury property is 6 KM away from the Tribhuvan International Airport, about 1 KM from the famous tourist hub of Nepal- Thamel.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
