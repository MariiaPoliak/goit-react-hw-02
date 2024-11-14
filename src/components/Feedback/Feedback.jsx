import styles from "./Feedback.module.css";

const Feedback = ({ feedbackCounts, totalFeedback, positiveFeedback }) => {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.item}>Good: {feedbackCounts.good}</li>
        <li className={styles.item}>Neutral: {feedbackCounts.neutral}</li>
        <li className={styles.item}>Bad: {feedbackCounts.bad}</li>
        <li className={styles.item}>Total: {totalFeedback}</li>
        <li className={styles.item}>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </footer>
  );
};

export default Feedback;
