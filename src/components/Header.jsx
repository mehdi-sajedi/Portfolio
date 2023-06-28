import styles from './Header.module.scss';
import { Link } from 'react-scroll';

const easeAnimation = 'easeInOutCubic';

const Header = () => {
  return (
    <header className={styles.header} id='header'>
      <a href='' className={styles.logoLink}>
        <img src='./logo.svg' />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link
              href='#about'
              to='about'
              smooth={easeAnimation}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='#projects'
              to='projects'
              smooth={easeAnimation}
              duration={1200}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='#contact'
              to='contact'
              smooth={easeAnimation}
              duration={1800}
              offset={-200}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
