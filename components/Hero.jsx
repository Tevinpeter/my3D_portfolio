import React from 'react';
import { useReducedMotion } from 'framer-motion';
import './portfolio-intro.css';

const Hero = () => {
  const reducedMotion = useReducedMotion();

  const exploreWork = () => {
    const section = document.getElementById('projects');
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80,
        behavior: reducedMotion ? 'instant' : 'smooth',
      });
    }
  };

  return (
    <section className='portfolio-hero' aria-labelledby='hero-heading'>
      {!reducedMotion && (
        <video autoPlay muted loop playsInline aria-hidden='true' className='portfolio-hero-video'>
          <source src='/public_blackhole.webm' type='video/webm' />
        </video>
      )}
      <div className='portfolio-hero-content'>
        <p className='portfolio-hero-eyebrow'>
          Hi, I'm <span className='portfolio-name'>Tevin</span>.
        </p>
        <h1 id='hero-heading'>I build software and solve complex technical problems.</h1>
        <p className='portfolio-hero-summary'>
          Software Developer &amp; Computer Engineering graduate building across web applications,
          APIs, databases and intelligent systems.
        </p>
        <div className='portfolio-hero-actions'>
          <button type='button' className='portfolio-cta portfolio-cta-primary' onClick={exploreWork}>
            Explore My Work
          </button>
          <a href='/Tevin_Mallya_CV.pdf' download='Tevin_Mallya_CV.pdf' className='portfolio-cta portfolio-cta-secondary' style={{ cursor: 'pointer' }}>
            Download CV
          </a>
        </div>
        <nav className='portfolio-socials' aria-label='Professional profiles and email'>
          <a href='https://github.com/Tevinpeter' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/tevin-peter-9a0397247' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <a href='mailto:tevinpeter74@gmail.com'>Email</a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
