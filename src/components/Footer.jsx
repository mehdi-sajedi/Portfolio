import styles from './Footer.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { LuMail } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a
            href='https://github.com/mehdi-sajedi'
            target='_blank'
            aria-label='Mehdi Sajedi GitHub'
          >
            <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/mehdisajedi'
            target='_blank'
            aria-label='Mehdi Sajedi LinkedIn'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href='mailto:mehdiisajedi@gmail.com'
            aria-label='Mehdi Sajedi email'
          >
            <LuMail />
          </a>
        </li>
      </ul>
      <div className={styles.copy}>
        <p>Mehdi Sajedi 2023</p>
        <i>
          <BiCopyright />
        </i>
      </div>
    </footer>
  );
};

export default Footer;
