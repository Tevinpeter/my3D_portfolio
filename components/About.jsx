import React from 'react';
import { styles } from '/src/styles.js';
import { web, backend, mobile, creator } from '/src/assets';
import './portfolio-intro.css';

const capabilities = [
  {
    title: 'Software Engineering',
    description: 'Building maintainable applications and turning requirements into working systems.',
    icon: web,
  },
  {
    title: 'Backend & APIs',
    description: 'Working with application logic, REST APIs, integrations, authentication and data.',
    icon: backend,
  },
  {
    title: 'Data & Databases',
    description: 'Designing and working with relational and NoSQL data systems.',
    icon: mobile,
  },
  {
    title: 'Problem Solving',
    description: 'Algorithms, debugging, root-cause analysis and breaking complex problems into manageable pieces.',
    icon: creator,
  },
];

const About = () => (
  <section className={`${styles.padding} max-w-7xl mx-auto relative z-0 portfolio-about`} aria-labelledby='about-heading'>
    <span className='hash-span' id='about' aria-hidden='true'>&nbsp;</span>
    <p className={styles.sectionSubText}>INTRODUCTION</p>
    <h2 id='about-heading' className={styles.sectionHeadText}>Overview</h2>
    <div className='portfolio-about-copy'>
      <p>
        I'm a Computer Engineering graduate and software developer who enjoys understanding how
        systems work—from the interface a user interacts with to the APIs, databases, and
        infrastructure operating underneath.
      </p>
      <p>
        My experience includes building software and troubleshooting production systems involving
        APIs, webhooks, JSON, authentication, and complex technical issues. That combination has
        taught me to approach software not just as code to be written, but as systems to be
        understood, debugged, and improved.
      </p>
      <p>
        I'm currently deepening my work in software engineering, algorithms, and intelligent systems,
        with a particular interest in building products that solve meaningful real-world problems.
      </p>
    </div>
    <ul className='portfolio-capabilities'>
      {capabilities.map(({ title, description, icon }) => (
        <li key={title} className='portfolio-capability'>
          <img src={icon} alt='' width={48} height={48} loading='lazy' />
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default About;
