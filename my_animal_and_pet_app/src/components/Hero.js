import React, { useState } from 'react';
import './style.css';

const pets = [
  'https://tinyurl.com/j8rfaker',
  'https://tinyurl.com/bddtkpzh',
  'https://tinyurl.com/2s4acc37'
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % pets.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + pets.length) % pets.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Prev</button>
      <img src={pets[current]} alt="Pet" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Slider;
