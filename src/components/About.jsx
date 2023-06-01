import styles from './About.module.scss';

// prettier-ignore
const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'SCSS', 'Git', 'Firebase']

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.about}>
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
      </div>
    </section>
  );
};

export default About;
