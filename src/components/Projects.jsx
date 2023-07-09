import { useState } from 'react';
import styles from './Projects.module.scss';
import Project from './Project';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const sizes = ['desktop', 'tablet', 'phone'];

const Projects = () => {
  const [demoImageType, setDemoImageType] = useState('desktop');

  const onClick = (e) => {
    console.log(e.target.dataset.size);
    setDemoImageType(e.target.dataset.size);
  };

  return (
    <section id='projects' className={styles.projectsSection} tabIndex={-1}>
      <div className={styles.headingContainer}>
        <motion.div
          className={styles.heading}
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
          viewport={{ margin: '-125px', once: true }}
        >
          <h2 className={styles.title}>Projects</h2>
          <h3 className={styles.text}>
            A collection of my featured technical projects
          </h3>
          <ul className={styles.demoImageButtons}>
            {sizes.map((s) => {
              return (
                <li key={`demo-${s}`}>
                  <button
                    data-size={s}
                    onClick={onClick}
                    className={demoImageType === s ? styles.active : ''}
                  >
                    {s}
                  </button>
                </li>
              );
            })}
          </ul>
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
