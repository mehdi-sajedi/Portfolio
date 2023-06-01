import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.contact}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.text}>
          Feel free to reach out or ask any questions!
        </p>
        <a className={styles.mail} href="mailto:mehdiisajedi@gmail.com">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
