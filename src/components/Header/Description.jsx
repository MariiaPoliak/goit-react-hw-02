import styles from "./Description.module.css";

const Header = () => {
  return (
    <header className={styles.heder}>
      <h1 className={styles.title1}>Sip Happens Cafe</h1>
      <p className={styles.paragraph}>Please leave your feedback about our service by selecting one of the options below.</p>
    </header>
  );
};

export default Header;