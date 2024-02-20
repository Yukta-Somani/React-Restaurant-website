import React from 'react';
import AboutImage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo aliquid quam saepe laboriosam. Doloribus libero iste voluptatum illo beatae temporibus.
            </p>
            <button>Read More</button>
        </div>

        <div className='about-image'>
            <img src={AboutImage} alt=''/>
        </div>
    </div>
  )
}

export default About;
