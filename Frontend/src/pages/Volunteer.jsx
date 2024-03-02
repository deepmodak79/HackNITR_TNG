import React from 'react';

const founders = [
  
  {
    name: 'Shaheera Fatima',
    role: 'Front-end Team',
    image: 'https://i.pinimg.com/236x/69/5c/3c/695c3cee049e454e65b9c90c6ae1a29f.jpg', // Replace with actual image file
  },

  {
    name: 'Deep Modak',
    role: 'Back-end Team',
    image: 'Deep.jpg', // Replace with actual image file
  },
  {
    name: 'Raksha Pahariya',
    role: 'Front End Team',
    image: 'Frontend\src\images\Raksha.jpg', // Replace with actual image file
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  