import React from 'react';

const founders = [
  
  

  {
    name: 'Deep Modak',
    role: 'Back-end Team',
    image: 'Deep.jpg', // Replace with actual image file
  },
  {
    name: 'Raksha Pahariya',
    role: 'Front End Team',
    image:<img src="https://drive.google.com/file/d/1SFzseWB3W4GNnqrg2NcBNRxS9Jn-c0tJ/view?usp=sharing" alt="image"></img>// Replace with actual image file
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

  