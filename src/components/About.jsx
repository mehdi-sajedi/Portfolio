import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// prettier-ignore
import { BiLogoNodejs, BiLogoRedux, BiLogoFirebase, BiLogoGit, BiLogoReact, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import {
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import { DiMongodb, DiSass } from 'react-icons/di';

// prettier-ignor
const skills = [
  ['JavaScript', <BiLogoJavascript />],
  ['TypeScript', <BiLogoTypescript />],
  ['React', <BiLogoReact />],
  ['Redux', <BiLogoRedux />],
  ['Node.js', <BiLogoNodejs />],
  ['Express', <SiExpress />],
  ['MongoDB', <DiMongodb />],
  ['HTML', <SiHtml5 />],
  ['CSS', <SiCss3 />],
  ['SCSS', <DiSass />],
  ['Git', <BiLogoGit />],
  ['Firebase', <BiLogoFirebase />],
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
    <section id='about' className={styles.aboutContainer}>
      <motion.div
        className={styles.about}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-100px', once: true }}
      >
        <div>
          <h3 className={styles.heading}>About Me</h3>
          <p className={styles.bio}>
            I am a passionate web developer whose programming journey took off
            after I enrolled in an introductory Python course at San Diego State
            University. Intrigued to explore different paths within the field, I
            sought out Harvard's renowned CS50: Introduction to Computer Science
            course, where I discovered a great passion for web development. From
            that point onward, I dedicated myself to self-learning web
            development by following tutorials, reading online resources, and
            building projects. This self-driven approach has allowed me to
            continuously expand my skills and stay up-to-date with the
            ever-evolving web development landscape. I look forward to continue
            learning new things and driving forward on this exciting career
            path!
          </p>
        </div>
        <div className={styles.skillSection}>
          <h3 className={styles.lead}>Developer Skills</h3>
          <ul className={styles.skills}>
            {skills.map(([text, logo]) => {
              return (
                <li
                  key={text}
                  onClick={() => onClick(text)}
                  className={skillsActive.includes(text) ? styles.active : ''}
                >
                  <i className={styles.logo}>{logo}</i>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
