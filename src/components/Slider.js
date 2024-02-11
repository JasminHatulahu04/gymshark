import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { slides } from '../data/slides';

function Slider() {
  return (
    <Carousel>
        {slides && slides.map((slide, index) =>  <Carousel.Item key={index}>
      <Image src={slide.image} alt={slide.title} />
      <Carousel.Caption>
        <h3 style={{fontSize: '80px'}}>{slide.title}</h3>
        <p style={{fontSize: '60px', marginBottom:'400px'}}>{slide.description}</p>
      </Carousel.Caption>
    </Carousel.Item>)}
    </Carousel>
  )
}

export default Slider;
