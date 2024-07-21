import React from 'react';
import './style.css';

const pets = [
  'https://tinyurl.com/2s35jfyp',
  'https://tinyurl.com/bdxu7dcx',
  'https://tinyurl.com/se9mx8jf',
  'https://tinyurl.com/3969srsf',
  'https://tinyurl.com/5bw5ahss',
  'https://tinyurl.com/2nv6s7he',
];

const Gallery = () => {
  return (
    <div className="gallery">
      {pets.map((pet, index) => (
        <img key={index} src={pet} alt={`Pet ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
