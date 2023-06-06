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
        transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-100px', once: false }}
      >
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.bio}>
          I am a passionate web developer whose programming journey took off
          after I enrolled in an introductory Python course at San Diego State
          University. Intrigued to explore different paths within the field, I
          sought out Harvard's renowned CS50: Introduction to Computer Science
          course, where I discovered a great passion for web development. From
          that point onward, I dedicated myself to self-learning web development
          by following tutorials, reading online resources, and building
          projects. This self-driven approach has allowed me to continuously
          expand my skills and stay up-to-date with the ever-evolving web
          development landscape. I look forward to continue learning new things
          and driving forward on this exciting career path!
        </p>
        <div className={styles.skillSection}>
          <p className={styles.lead}>Developer Skills</p>
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
