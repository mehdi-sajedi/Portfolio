import styles from './Footer.module.scss';
import { AiOutlineGithub } from 'react-icons/ai';
import { LuMail } from 'react-icons/lu';
import { FaLinkedinIn, FaCopyright } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>
          <a href="https://github.com/mehdi-sajedi" target="_blank">
            <AiOutlineGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/mehdisajedi" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="mailto:mehdiisajedi@gmail.com">
            <LuMail />
          </a>
        </li>
      </ul>
      <div className={styles.copy}>
        <i>
          <BiCopyright />
        </i>
        <p>Mehdi Sajedi 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
