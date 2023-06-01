import styles from './Projects.module.scss';
import Project from './Project';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Projects</h2>
        <h4 className={styles.text}>
          A collection of my featured technical projects
        </h4>
      </div>
      <div className={styles.projects}>
        {projectsData.map((p) => {
          return <Project {...p} key={p.name} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
