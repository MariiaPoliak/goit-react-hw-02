import styles from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, handleReset }) {
  return (
    <div className={styles.list}>
      <button
        className={styles.list_item}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={styles.list_item}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={styles.list_item}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.list_item} onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
