import React from 'react';
import { styles } from '/src/styles.js';
import { projects, mlExperiments } from '/src/constants';
import './career-work.css';

const ProjectCard = ({ project, index }) => (
  <article className='engineering-project' aria-labelledby={`${project.id}-heading`}>
    <div className='project-architecture' aria-label={`${project.name} architecture overview`}>
      <div className='project-panel-label'><span>{project.category}</span><span aria-hidden='true'>0{index + 1}</span></div>
      <ol className='project-flow'>
        {project.architecture.map((item) => <li key={item}>{item}</li>)}
      </ol>
      <p>{project.architectureCaption}</p>
    </div>
    <div className='engineering-project-body'>
      <h3 id={`${project.id}-heading`}>{project.name}</h3>
      <p className='project-summary'>{project.description}</p>
      <ul className='project-details'>
        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <ul className='project-technologies' aria-label='Technologies'>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className='project-links'>
        {project.source_code_link && <a href={project.source_code_link} target='_blank' rel='noopener noreferrer' aria-label={`View ${project.name} code on GitHub`}>View Code <span aria-hidden='true'>↗</span></a>}
        {project.live_link && <a href={project.live_link} target='_blank' rel='noopener noreferrer' aria-label={`Open ${project.name} live demo`}>Live Demo <span aria-hidden='true'>↗</span></a>}
      </div>
    </div>
  </article>
);

const Works = () => (
  <section id='projects' className={`${styles.padding} max-w-7xl mx-auto relative z-0 career-section`} aria-labelledby='projects-heading'>
    <p className={styles.sectionSubText}>Selected engineering work</p>
    <h2 id='projects-heading' className={styles.sectionHeadText}>Projects.</h2>
    <p className='career-introduction'>Building across application interfaces, API integrations, and relational data systems.</p>
    <div className='engineering-project-grid'>
      {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </div>
    <section className='ml-lab' aria-labelledby='ml-lab-heading'>
      <div className='ml-lab-header'>
        <div><p className='career-category'>Independent development</p><h3 id='ml-lab-heading'>Machine Learning Lab</h3></div>
        <span className='ml-status'>Local experiments</span>
      </div>
      <p className='ml-lab-introduction'>Practical implementations and classification experiments to understand how machine learning models learn and make predictions. This work currently lives locally.</p>
      <ul className='ml-experiment-grid'>
        {mlExperiments.map((experiment) => (
          <li key={experiment.title}>
            <h4>{experiment.title}</h4>
            <p>{experiment.description}</p>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Works;
