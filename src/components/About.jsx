import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// prettier-ignore
import { BiLogoNodejs, BiLogoRedux, BiLogoFirebase, BiLogoGit, BiLogoReact, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiHtml5, SiCss3 } from 'react-icons/si';
import { DiMongodb, DiSass } from 'react-icons/di';

const skills = [
  ['HTML', <SiHtml5 />],
  ['CSS', <SiCss3 />],
  ['JavaScript', <BiLogoJavascript />],
  ['React', <BiLogoReact />],
  ['SCSS', <DiSass />],
  ['TypeScript', <BiLogoTypescript />],
  ['Node.js', <BiLogoNodejs />],
  ['Express', <SiExpress />],
  ['MongoDB', <DiMongodb />],
  ['Redux', <BiLogoRedux />],
  ['Firebase', <BiLogoFirebase />],
  ['Git', <BiLogoGit />],
];

const About = () => {
  const [skillsActive, setSkillsActive] = useState([]);

  const onClick = (text) => {
    if (!skillsActive.includes(text)) {
      setSkillsActive((prevState) => [...prevState, text]);
    } else {
      setSkillsActive((prevState) => prevState.filter((s) => s !== text));
    }
  };

  return (
    <section id='about' className={styles.aboutContainer} tabIndex={-1}>
      <motion.div
        className={styles.about}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-80px', once: true }}
      >
        <div>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.bio}>
            Hello! My name’s Mehdi and my programming journey began when I took
            my first coding course at San Diego State University. As a
            detail-oriented individual with a strong inclination for visual
            learning, I had a natural liking towards web development. The
            combination of traditional programming alongside the creative
            opportunities offered through frontend design made it a great fit
            for me. I dedicated myself to self-learning web development by
            reading online resources, following tutorials, and building
            projects. This self-driven approach has allowed me to continuously
            expand my skills and stay up-to-date with the ever-evolving web
            development landscape. I eagerly look forward to taking on new
            challenges and learning new things on this exciting career path!
          </p>
        </div>
        <div className={styles.devSkills}>
          <h3 className={styles.lead}>Developer Skills</h3>
          <ul className={styles.skillsList}>
            {skills.map(([text, logo]) => {
              return (
                <li
                  key={text}
                  className={skillsActive.includes(text) ? styles.active : ''}
                >
                  <button onClick={() => onClick(text)}>
                    <i>{logo}</i>
                    <span>{text}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
    </section>
  );
};

export default About;
