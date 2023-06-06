import { useState } from 'react';
import styles from './Projects.module.scss';
import Project from './Project';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  const [demoImageType, setDemoImageType] = useState('desktop');

  const onChange = (e) => {
    setDemoImageType(e.target.value);
  };

  return (
    <section id='projects' className={styles.projectsSection}>
      <div className={styles.headingContainer}>
        <motion.div
          className={styles.heading}
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
          viewport={{ margin: '-125px', once: false }}
        >
          <h2 className={styles.title}>Projects</h2>
          <h4 className={styles.text}>
            A collection of my featured technical projects
          </h4>
          <div className={styles.demoImageButtons}>
            <input
              type='radio'
              id='desktop'
              value='desktop'
              radioGroup='demo'
              onChange={onChange}
              checked={demoImageType === 'desktop'}
            />
            <label htmlFor='desktop'>Desktop</label>
            <input
              type='radio'
              id='tablet'
              value='tablet'
              radioGroup='demo'
              onChange={onChange}
              checked={demoImageType === 'tablet'}
            />
            <label htmlFor='tablet'>Tablet</label>
            <input
              type='radio'
              id='phone'
              value='phone'
              radioGroup='demo'
              onChange={onChange}
              checked={demoImageType === 'phone'}
            />
            <label htmlFor='phone'>Phone</label>
          </div>
        </motion.div>
      </div>
      <div className={styles.projects}>
        {projectsData.map((p, idx) => {
          return (
            <Project
              {...p}
              demoImageType={demoImageType}
              key={p.name}
              idx={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
