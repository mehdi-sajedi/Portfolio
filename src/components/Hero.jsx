import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h4 className={styles.lead}>Hey, my name is</h4>
          <h1 className={styles.name}>Mehdi Sajedi</h1>
          <h2 className={styles.tagline}>I create things for the internet</h2>
          <p className={styles.description}>
            I'm a Web Developer from San Diego, CA. I graduated from San Diego
            State University with a Bachelor's degree in Information Systems.
          </p>
          <a
            className={styles.link}
            href="https://www.github.com/mehdi-sajedi"
            target="_blank"
          >
            Check out my GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
