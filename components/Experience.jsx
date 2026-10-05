import React from 'react';
import { styles } from '/src/styles.js';
import { experiences } from '/src/constants';
import './career-work.css';

const Experience = () => (
  <section id='work' className={`${styles.padding} max-w-7xl mx-auto relative z-0 career-section`} aria-labelledby='journey-heading'>
    <p className={styles.sectionSubText}>My journey</p>
    <h2 id='journey-heading' className={styles.sectionHeadText}>Experience &amp; Growth</h2>
    <p className='career-introduction'>Production troubleshooting, a foundation in computer engineering, and continued hands-on development.</p>
    <ol className='career-timeline'>
      {experiences.map((experience) => (
        <li key={experience.id} className='career-entry'>
          <div className='career-marker' aria-hidden='true'>{experience.marker}</div>
          <article className='career-card' aria-labelledby={`${experience.id}-heading`}>
            <div className='career-meta'>
              <span className='career-category'>{experience.category}</span>
              <span>{experience.date}</span>
            </div>
            <h3 id={`${experience.id}-heading`}>{experience.title}</h3>
            {experience.organization && <p className='career-organization'>{experience.organization}</p>}
            {experience.location && <p className='career-location'>{experience.location}</p>}
            <ul className='career-points'>
              {experience.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
