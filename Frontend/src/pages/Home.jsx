import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home_info from '../components/Home_info';
import img1 from '../images/homeimgnew-min.jpeg';


const Home = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup + ' ' + response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

    return (
      <div className='home-page'>
        <div className="helpline-container">
        <h3 className="marquee" style={{ color: 'crimson' }}>
          Helpline Numbers under the Tele-MANAS Programme :📞 +91 - xxxxxxxxxx
        </h3>
      </div>
        <div className='home-allcontent'>

        <div className='home-project-intro-image'>
          <img src={img1} alt='Rahat: Embrace, Empower, Elevate' ></img>
          
        </div>

        <div className='home-project-intro-quote'>
        <h3>
          "In the journey of life, may you find solace, laughter, and the companionship of kindred souls."
        </h3>
        </div>

        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <h2>{joke}</h2>
            </blockquote>
          </header>
        </div>
         <div className='home-project-intro'>
        <p>
          We trust you'll find our jokes as delightful as we do.Rahat provides an abundance of resources designed to bring a smile to your face, even during moments when it feels challenging. Additionally, we offer a diverse array of tools to aid in your self-discovery journey. Because everyone deserves insight into their inner workings. 
        </p>
        </div>

        <Home_info />

    
        </div>
      </div>
    );
  }; 
export default Home;

