import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

// prettier-ignore
import { BiLogoNodejs, BiLogoRedux, BiLogoFirebase, BiLogoGit, BiLogoReact, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiExpress, SiHtml5, SiCss3 } from 'react-icons/si';
import { DiMongodb, DiSass } from 'react-icons/di';

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
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.bio}>
            My programming journey took off after enrolling in an introductory
            Python course at San Diego State University. Coding turned out to be
            a lot of fun and I was intrigued to explore the various paths within
            the software engineering field. I discovered web development and
            dedicated myself to self-learning it by reading online resources,
            following tutorials, and building projects. This self-driven
            approach has allowed me to continuously expand my skills and stay
            up-to-date with the ever-evolving web development landscape. I look
            forward to taking on new challenges and learning new things on this
            exciting career path!
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
    </section>
  );
};

export default About;
