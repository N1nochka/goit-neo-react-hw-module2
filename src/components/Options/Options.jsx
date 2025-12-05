import styles from "./Options.module.css";

const Options = ({ onUpdate, onReset, totalFeedback }) => {
  return (
    <div className={styles.optionsContainer}>
      <button onClick={() => onUpdate("good")} className={styles.btn}>
        Good
      </button>
      <button onClick={() => onUpdate("neutral")} className={styles.btn}>
        Neutral
      </button>
      <button onClick={() => onUpdate("bad")} className={styles.btn}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button onClick={onReset} className={styles.resetBtn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
