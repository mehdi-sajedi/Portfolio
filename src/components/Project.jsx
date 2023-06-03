import styles from './Project.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Project = ({ name, cover, desc, tech, github, website, idx }) => {
  return (
    <div className={styles.projectContainer}>
      <motion.div
        className={styles.project}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: '-75px' }}
      >
        <a href={website} target='_blank' className={styles.imageLink}>
          <img src={cover} alt='Project demo' />
        </a>
        <div className={styles.info}>
          <a href={website} target='_blank' className={styles.name}>
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
            <a href={github} target='_blank'>
              <AiOutlineGithub />
            </a>
            <a href={website} target='_blank'>
              <HiOutlineExternalLink />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
