import styles from "./Description.module.css";

const Description = () => {
  return (
    <header className={styles.title_box}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Sip Happens Cafe</h1>
        <p className={styles.subTitle}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
    </header>
  );
};

export default Description;
