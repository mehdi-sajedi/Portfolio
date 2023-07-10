import styles from './Header.module.scss';
import CustomLink from './utilities/CustomLink';

const Header = () => {
  return (
    <header className={styles.header} id='header' tabIndex={-1}>
      <a href='' className={styles.logoLink}>
        <img src='./logo.svg' />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <CustomLink id='about' duration={1000}>
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink id='projects' duration={1100}>
              Projects
            </CustomLink>
          </li>
          <li>
            <CustomLink id='contact' duration={1400} offset={-200}>
              Contact
            </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
