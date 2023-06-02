import styles from './Project.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Project = ({ name, cover, desc, tech, github, website, idx }) => {
  const imgSrc = cover;

  return (
    <div className={styles.projectContainer}>
      <div className={styles.project}>
        <a href={website} target="_blank" className={styles.imageLink}>
          <img src={imgSrc} alt="Project demo" />
        </a>
        <div className={styles.info}>
          <a href={website} target="_blank" className={styles.name}>
            <h3>
              {idx + 1}. {''}
              {name}
            </h3>
          </a>
          <ul className={styles.tech}>
            {tech.map((item) => (
              <li key={`${name}-${item}`}>{item}</li>
            ))}
          </ul>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.links}>
            <a href={github} target="_blank">
              <AiOutlineGithub />
            </a>
            <a href={website} target="_blank">
              <HiOutlineExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
