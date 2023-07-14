import styles from './Header.module.scss';
import CustomLink from './utilities/CustomLink';

const Header = () => {
  return (
    <header className={styles.header} id='header' tabIndex={-1}>
      <a href='' className={styles.logoLink} aria-label='Mehdi Sajedi logo'>
        <img src='./logo.svg' alt='Mehdi Sajedi logo' />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <CustomLink id='about' duration={800}>
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink id='projects' duration={900}>
              Projects
            </CustomLink>
          </li>
          <li>
            <CustomLink id='contact' duration={1300} offset={-200}>
              Contact
            </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
