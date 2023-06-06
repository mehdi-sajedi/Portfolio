import styles from './Contact.module.scss';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id='contact' className={styles.contactContainer}>
      <motion.div
        className={styles.contact}
        initial={{ y: 35, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.78, 0.22, 0.5, 0.96] }}
        viewport={{ margin: '-100px', once: false }}
      >
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          Feel free to reach out or ask any questions!
        </p>
        <a className={styles.mail} href='mailto:mehdiisajedi@gmail.com'>
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
