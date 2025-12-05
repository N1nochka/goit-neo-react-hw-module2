import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={styles.notificationText}>{message}</p>;
};

export default Notification;
