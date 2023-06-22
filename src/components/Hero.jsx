import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 75, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <h4 className={styles.lead}>Hey, I'm</h4>
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
        className={styles.scrollToTop}
      >
        <i>
          <MdKeyboardDoubleArrowDown />
        </i>
      </Link>
    </section>
  );
};

export default Hero;
