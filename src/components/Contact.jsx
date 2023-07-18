import styles from './Contact.module.scss';
import { motion } from 'framer-motion';
import { BiUpArrowAlt } from 'react-icons/bi';
import CustomLink from './utilities/CustomLink';

const Contact = () => {
  return (
    <section id='contact' className={styles.contactContainer} tabIndex={-1}>
      <motion.div
        className={styles.contact}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-80px', once: true }}
      >
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          Feel free to reach out or ask any questions!
        </p>
        <a
          className={styles.mail}
          href='mailto:mehdiisajedi@gmail.com'
          aria-label='Send email to Mehdi Sajedi'
        >
          Say Hello
        </a>
      </motion.div>
      <CustomLink id='header' duration={1300} className={styles.scrollToTop}>
        <i aria-label='Scroll up arrow'>
          <BiUpArrowAlt />
        </i>
      </CustomLink>
      <div className={styles.wave}></div>
    </section>
  );
};

export default Contact;
