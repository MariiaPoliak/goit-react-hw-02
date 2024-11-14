import styles from "./Feedback.module.css";

const Feedback = ({feedbackCounts:{good = 0, neutral = 0,bad = 0}, totalFeedback, positiveFeedback}) => {

  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}> Good: {good}</li>
        <li className={styles.item}> Neutral: {neutral}</li>
        <li className={styles.item}> Bad: {bad}</li>
        <li className={styles.item}> Total: {totalFeedback}</li>
        <li className={styles.item}> Positive: {positiveFeedback }%</li>
      </ul>
    </footer>
  );
};

export default Feedback;