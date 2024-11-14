import styles from "./Options.module.css";

const Options = ({ counter, updateFeedback, handleReset, totalFeedback }) => {
  const feedbackTypes = ["good", "neutral", "bad"];

  return (
    <ul className={styles.list}>
      {feedbackTypes.map((type) => (
        <li key={type} className={styles.list_item}>
          <button
            className={styles.button_group}
            onClick={() => updateFeedback(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </li>
      ))}
      {totalFeedback !== 0 && (
        <li className={styles.list_item}>
          <button className={styles.button_group} onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
