import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.statsList}>
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Good:</span>
          <span className={styles.statValue}>{good}</span>
        </p>
        
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Neutral:</span>
          <span className={styles.statValue}>{neutral}</span>
        </p>
        
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Bad:</span>
          <span className={styles.statValue}>{bad}</span>
        </p>
        
        <div className={styles.statDivider}></div>
        
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Total:</span>
          <span className={`${styles.statValue} ${styles.total}`}>
            {total}
          </span>
        </p>
        
        <p className={styles.statItem}>
          <span className={styles.statLabel}>Positive:</span>
          <span className={`${styles.statValue} ${styles.positive}`}>
            {positivePercentage}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default Feedback;