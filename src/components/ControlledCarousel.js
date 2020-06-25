import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';

import img0 from "../assets/images/telaimg.png";
import img1 from "../assets/images/tela1img.png";
import img2 from "../assets/images/tela2img.png";
import img3 from "../assets/images/tela3img.png";
import img4 from "../assets/images/tela4img.png";
import img5 from "../assets/images/tela5img.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img0}
          alt="Primeiro slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Primeiro slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Segundo slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Terceiro slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt=" Quarto slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Quinto slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
