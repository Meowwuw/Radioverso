import React, { useEffect } from 'react';
import './Intro.css';
import { Link as ScrollLink } from 'react-scroll';

const Intro = () => {
  useEffect(() => {
    // Añade las estrellas al fondo
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
    });
  }, []);

  const numberOfStars = 100; // Ajusta esto por el número de estrellas que desees
  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <div key={index} className="star" />
  ));

  return (
    <div className="intro">
      {/* Renderizar estrellas aquí */}
      {stars}
      <h1 className="radioverso">RADIOVERSO</h1>
      <h2 className="mas-alla">MÁS ALLÁ DE TUS OÍDOS</h2>
      <div className="slogan-container">
        <p className="slogan">
          Radioverso una empresa <br />
          que busca difundir la música local <br />
          y desarrollar la industria nacional.
        </p>
      </div>
      <ScrollLink
        to="contacto"
        smooth={true}
        offset={-0}
        className="btn-contact"
      >
        Haz click aquí<br />para hacer contacto
      </ScrollLink>
    </div>
  );
};

export default Intro;