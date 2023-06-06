import styles from './Project.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Project = ({
  name,
  cover,
  coverTablet,
  coverPhone,
  desc,
  tech,
  github,
  website,
  idx,
  demoImageType,
}) => {
  return (
    <div className={styles.projectContainer}>
      <motion.div
        className={styles.project}
        initial={{ x: 125, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-88px', once: false }}
      >
        <a
          href={website}
          target='_blank'
          className={` ${styles.imageLink} ${
            demoImageType === 'desktop' ? styles.active : ''
          } `}
        >
          <img src={cover} alt='Project demo' />
        </a>
        <a
          href={website}
          target='_blank'
          className={` ${styles.imageLink} ${
            demoImageType === 'tablet' ? styles.active : ''
          } `}
        >
          <img src={coverTablet} alt='Project demo' />
        </a>
        <a
          href={website}
          target='_blank'
          className={` ${styles.imageLink} ${
            demoImageType === 'phone' ? styles.active : ''
          } `}
        >
          <img src={coverPhone} alt='Project demo' />
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
