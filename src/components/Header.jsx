import styles from './Header.module.scss';
import { useEffect } from 'react';
import { Link, Events } from 'react-scroll';

const easeAnimation = 'easeInOutCubic';

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('end', (_to, element) => {
      element?.focus();
    });
  }, []);

  return (
    <header className={styles.header} id='header' tabindex={-1}>
      <a href='' className={styles.logoLink}>
        <img src='./logo.svg' />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link
              href='#about'
              to='about'
              spy='about'
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
              // hashSpy={true}
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
              // hashSpy={true}
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
