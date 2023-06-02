import styles from './Nav.module.scss';
import Logo from '../components/utilities/Logo';

const Nav = () => {
  return (
    <header className={styles.header}>
      <a href="">
        <Logo />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
