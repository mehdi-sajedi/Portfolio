import styles from './Hero.module.scss';
import CustomLink from './utilities/CustomLink';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 0, scale: 1 }}
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
      <CustomLink id='about' duration={800} className={styles.scrollToBottom}>
        <i aria-label='Scroll down arrow'>
          <MdKeyboardDoubleArrowDown />
        </i>
      </CustomLink>
    </section>
  );
};

export default Hero;
