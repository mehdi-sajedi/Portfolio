import styles from './About.module.scss';
import { motion } from 'framer-motion';

// prettier-ignore
const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'SCSS', 'Git', 'Firebase']

const About = () => {
  return (
    <section id='about' className={styles.aboutContainer}>
      <motion.div
        className={styles.about}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ margin: '-100px' }}
      >
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.bio}>
          Hello! My name is Mehdi and I enjoy building user interfaces on the
          web. My interest in web development was sparked by Harvard's CS50:
          Introduction to Computer Science course. Messing around with basic
          HTML & CSS was a lot of fun and intrigued me to learn more.
        </p>
        <div className={styles.skillSection}>
          <p className={styles.lead}>Developer Skills:</p>
          <ul className={styles.skills}>
            {skills.map((s) => {
              return <li key={s}>{s}</li>;
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
