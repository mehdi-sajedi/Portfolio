import styles from './Projects.module.scss';
import Project from './Project';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id='projects' className={styles.projectsSection}>
      <div className={styles.headingContainer}>
        <motion.div
          className={styles.heading}
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: '-125px' }}
        >
          <h2 className={styles.title}>Projects</h2>
          <h4 className={styles.text}>
            A collection of my featured technical projects
          </h4>
        </motion.div>
      </div>
      <div className={styles.projects}>
        {projectsData.map((p, idx) => {
          return <Project {...p} key={p.name} idx={idx} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
