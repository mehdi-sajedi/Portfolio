import styles from './Hero.module.scss';
import { useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const Hero = () => {
  useEffect(() => {
    Events.scrollEvent.register('end', (_to, element) => {
      element?.focus();
    });
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 75, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className={styles.lead}>Hey, I'm</p>
          <h1 className={styles.name}>Mehdi Sajedi</h1>
          <h2 className={styles.tagline}>
            A Frontend Developer from {''}
            <span>San Diego</span>
          </h2>
          <a
            className={styles.link}
            href='https://www.github.com/mehdi-sajedi'
            target='_blank'
          >
            Check out my GitHub
          </a>
        </motion.div>
      </div>
      <Link
        to='about'
        href='#about'
        smooth='easeInOutCubic'
        duration={1000}
        className={styles.scrollToBottom}
      >
        <i>
          <MdKeyboardDoubleArrowDown />
        </i>
      </Link>
    </section>
  );
};

export default Hero;
