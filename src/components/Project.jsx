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
  const screenSizes = [
    [cover, 'desktop'],
    [coverTablet, 'tablet'],
    [coverPhone, 'phone'],
  ];

  return (
    <div className={styles.projectContainer} tabIndex={-1}>
      <motion.div
        className={styles.project}
        initial={{ x: 125, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-88px', once: true }}
      >
        {screenSizes.map(([imagePath, screen]) => {
          return (
            <a
              key={screen}
              href={website}
              target='_blank'
              className={` ${styles.imageLink} ${
                demoImageType === screen ? styles.active : ''
              } `}
            >
              <img src={imagePath} alt='Project demo' />
            </a>
          );
        })}
        <div className={styles.info}>
          <h4 className={styles.name}>
            <a href={website} target='_blank'>
              {idx + 1}. {''}
              {name}
            </a>
          </h4>
          <ul className={styles.tech}>
            {tech.map((item) => (
              <li key={`${name}-${item}`}>{item}</li>
            ))}
          </ul>
          <p className={styles.description}>{desc}</p>
          <div className={styles.links}>
            <a href={github} target='_blank'>
              <AiOutlineGithub /> GitHub
            </a>
            <a href={website} target='_blank'>
              <HiOutlineExternalLink /> View site
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
