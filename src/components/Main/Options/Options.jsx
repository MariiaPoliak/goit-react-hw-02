import styles from "./Options.module.css";
//використання className={clsx("add", "vaa")}
// import clsx from "clsx";

const Options = ( {counter, updateFeedback, handleReset, totalFeedback } ) => {
  // console.log(onIncrement)
    const { good, neutral, bad } = counter;

  return (
    <ul className={styles.list}>
       <li className={styles.list_item}>
        <button className={styles.button_group} onClick={() =>  updateFeedback("good")}>Good</button>
      </li>
      <li className={styles.list_item}>
        <button className={styles.button_group} onClick={() =>  updateFeedback("neutral")}>Neutral</button>
      </li>
      <li className={styles.list_item}>
        <button className={styles.button_group} onClick={() =>  updateFeedback("bad")}>Bad</button>
      </li>
      {totalFeedback !== 0 && <li className={styles.list_item}>
        <button className={styles.button_group} onClick={handleReset}>Reset</button>
      </li>}
    </ul>
  );
};
export default Options;